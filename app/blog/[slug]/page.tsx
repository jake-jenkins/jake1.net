import { getContent, getContents } from "@/app/lib";
import CheckIcon from "@/components/CheckIcon";
import Heading from "@/components/Heading";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getContents("posts");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { frontmatter } = await getContent("posts", slug);
  return {
    title: frontmatter.name,
    description: frontmatter.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const content = await getContent("posts", slug);

  return (
    <>
      <div className="heroWrapper">
        {content.frontmatter.image ? (
          <Image
            priority
            src={content.frontmatter.image}
            alt={`${content.frontmatter.description} image`}
            className="heroImage border-b-4 border-lime-300"
            fill
          />
        ) : null}
      </div>
      <div className="px-12 py-8 container mx-auto">
        <Heading level={1}>{content.frontmatter.name}</Heading>

        {content.content}
        <div className="mt-4 mb-8">
          <Heading level={2}>Technology</Heading>
          <ul className="list-inside">
            {content.frontmatter.tags.map((tag: string) => (
              <li key={tag} className="flex items-center">
                <CheckIcon />{tag}
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
