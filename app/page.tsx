import { getProjects } from "@/sanity/sanity-utils";
import { Event } from "@/types/Event";
import Navbar from "./components/Navbar";
import { simpleBlogCard } from "@/sanity/lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home({}) {
  const events: simpleBlogCard[] = await getProjects();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mt-5 gap-2">
        {events.map((post, idx) => (
          <Card key={idx}>
            <Image
              src={urlFor(post.image).url()}
              alt="image"
              width={500}
              height={500}
              className="round-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="text-xl line-clamp-4 font-bold text-primary">
                {post.name}
              </h3>
              <p className="text-sm mt-2 text-black-300">{post.date}</p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
