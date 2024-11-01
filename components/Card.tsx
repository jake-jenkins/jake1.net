import type { Project } from "@/app/lib";
import Link from "next/link";
import Image from "next/image";

export default function Card({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="border-b-2 border-lime-500 bg-white shadow-md w-full mb-8">
      <Image
      className="w-full"
        src={project.image}
        width={400}
        height={190}
        alt={`${project.name} image`}
      />
      <div className="h-48 p-4 mb-4 flex flex-col">
        <div className="text-xl flex font-medium h-16 items-center pb-2">{project.name}</div>
        <span className="flex-1">{project.description}</span>
        <span className="block mt-6 text-sm">{project.category}</span>
      </div>
    </Link>
  );
}
