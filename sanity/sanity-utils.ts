import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { Event } from "@/types/Event";

// Create a Sanity client instance outside of the function to avoid re-creating it on every call
const client = createClient({
  apiVersion,
  dataset,
  projectId,
});
// Function to fetch events and expose them for frontend use
//: Promise<Event[]>
export async function getProjects() {
  const query = groq`*[_type == "event"] | order(date desc) {
        name,
    "slug": slug.current,
    date,
    detail,
    doorsOpen,
    "venue": venue->{
      _id,
      name
      // Include other necessary fields from the 'venue' schema here
    },
     image {
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            palette {
              dominant {
                background,
                foreground
              }
            }
          }
        }
    
    }
  }`;

  try {
    const events = await client.fetch(query);
    return events;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    throw error; // Handle or rethrow the error as needed
  }
}
