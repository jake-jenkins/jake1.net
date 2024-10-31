import { getProject } from "@/app/lib";

export async function generateMetadata({
  params,
}: {
  params: { projectSlug: string };
}) {
  const { projectSlug } = await params;
  const { frontmatter } = await getProject(projectSlug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { projectSlug: string };
}) {
  const { projectSlug } = await params;
  const content = await getProject(projectSlug);

  return (
    <>
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
