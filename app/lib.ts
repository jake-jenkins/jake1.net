import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

export async function getContent(folder: string, name: string) {
    const data = await fs.readFile(
        path.join(process.cwd(), folder, `${name}.mdx`),
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

export async function getContents(folder: string) {
    const filenames = await fs.readdir(path.join(process.cwd(), folder));
    const projects = await Promise.all(filenames.map(async (filename) => {
        const content = await getContent(folder, filename.replace('.mdx', ''));
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
    tags: string[],
    created?: Date
}