import { client, urlFor } from "@/sanity/lib/client";
import { fullBlog } from "@/sanity/lib/interface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getDiffAtPath } from "sanity";

async function getProjects(slug: string) {
  const query = `*[_type == "event" && slug.current == '${slug}'] {
        name,
        "slug": slug.current,
        date,
        doorsOpen,
          image,
        "venue": venue->{
          _id,
          name
        },details}[0]
      `;

  const event = await client.fetch(query);
  return event;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const event: fullBlog = await getProjects(params.slug);

  return (
    <div className="mt-8 items-center">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Event in Singapore
        </span>
        <span className="mt-2 block text-3x1 text-center leading-8 font-bold tracking-tight sm:text-xl">
          {event.name}
        </span>
      </h1>
      <Image
        src={urlFor(event.image).url()}
        alt="title image"
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 border"
      />
      <div className="mt-16 prose prose-blue prose-xl dark:prose-invert">
        <PortableText value={event.details} />
      </div>
    </div>
  );
}
