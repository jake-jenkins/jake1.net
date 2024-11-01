import { getProjects } from "../lib";
import type { Project } from "../lib";
import Link from "next/link";
import Heading from "@/components/Heading";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="p-4">
      <Heading level={1}>Projects</Heading>
      <ul>
        {projects.map((project: Project) => (
          <li key={project.slug}>
          <Link href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
