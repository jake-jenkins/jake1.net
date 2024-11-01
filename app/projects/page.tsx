import { getProjects } from "../lib";
import type { Project } from "../lib";
import Heading from "@/components/Heading";
import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects"
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="px-12 py-8 container mx-auto">
      <Heading level={1}>Projects</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {projects.map((project: Project) => (
        <Card key={project.slug} project={project} />
      ))}
      </div>
    </div>
  );
}
