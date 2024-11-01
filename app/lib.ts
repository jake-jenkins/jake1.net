import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getProject(name: string) {
    const data = await fs.readFile(
        path.join(process.cwd(), "projects", `${name}.mdx`),
        "utf-8"
    );
    const project = await compileMDX<Project>({
        source: data,
        options: {
            parseFrontmatter: true,
        },
    });
    project.frontmatter.slug = name;
    return project;
}

export async function getProjects() {
    const filenames = await fs.readdir(path.join(process.cwd(), 'projects'));
    const projects = await Promise.all(filenames.map(async (filename) => {
        const content = await getProject(filename.replace('.mdx', ''));
        const { frontmatter } = content;
        return {
            slug: filename.replace('.mdx', ''),
            ...frontmatter
        }
    }))
    return projects;
}

export type Project = {
    name: string,
    slug?: string,
    description: string,
    category: string,
    image: string,
    tags: string[]
}