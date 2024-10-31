import { getProject, getProjects } from "@/app/lib";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
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
    <Link href="/projects" className="px-4 py-2 bg-slate-100 mb-4 inline-block text-sm rounded-md">All Projects</Link>
      <h1 className="text-sky-800 text-5xl">{content.frontmatter.name}</h1>
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
