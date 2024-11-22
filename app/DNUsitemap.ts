// import { getContents, Project } from "./lib";

// const baseUrl = "https://www.jake.ac"
// function buildEntry(project: Project, frequency: string, priority: number, basePath?: string) {
//     return {
//         url: basePath ? `${baseUrl}/${basePath}/${project.slug}` : `${baseUrl}/${project.slug}`,
//         lastModified: project.created || new Date(),
//         changeFrequency: frequency,
//         priority,
//     }
// }

// async function buildSiteMap() {
//     const projects = await getContents("projects");
//     const urls = [
//         {
//             url: baseUrl,
//             lastModified: new Date(),
//             changeFrequency: 'weekly',
//             priority: 1,
//         },
//         {
//             url: `${baseUrl}/projects`,
//             lastModified: new Date(),
//             changeFrequency: 'weekly',
//             priority: 0.8,
//         },
//         {
//             url: `${baseUrl}/blog/deploy-nextjs-to-vps`,
//             lastModified: new Date(),
//             changeFrequency: 'weekly',
//             priority: 0.5,
//         },
//     ]

//     projects.map((project: Project) => {
//         const newEntry = buildEntry(project, "weekly", 0.5, "projects");
//         urls.push(newEntry)
//     })

//     return urls;

// }

// export default async function sitemap() {
//     const sitemap = await buildSiteMap();
//     return sitemap;
// }