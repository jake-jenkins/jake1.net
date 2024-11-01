import { getProject, getProjects } from "@/app/lib";
import Heading from "@/components/Heading";
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
            className="heroImage border-b-4 border-lime-300"
            fill
          />
        ) : null}
      </div>
      <div className="p-4">
        <Heading level={1}>{content.frontmatter.name}</Heading>

        {content.content}
        <div className="my-4">
          <Heading level={2}>Technology</Heading>
          <ul className="list-disc list-inside">
            {content.frontmatter.tags.map((tag: string) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
