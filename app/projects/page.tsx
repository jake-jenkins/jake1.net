import { getProjects } from "../lib";
import type { Project } from "../lib";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map((project: Project) => (
          <li key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
