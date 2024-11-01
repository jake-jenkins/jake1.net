import { getProject, getProjects } from "@/app/lib";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { frontmatter } = await getProject(slug);
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
  const content = await getProject(slug);

  return (
    <>
      <div className="heroWrapper">
        {content.frontmatter.image ? (
          <Image
            priority
            src={content.frontmatter.image}
            alt={`${content.frontmatter.description} image`}
            className="heroImage"
            fill
          />
        ) : null}
      </div>

      <h1 className="text-sky-800 text-5xl mb-4">{content.frontmatter.name}</h1>

      {content.content}
      <div>
        <h2>Technology</h2>
        <ul className="list-disc list-inside">
          {content.frontmatter.tags.map((tag: string) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
