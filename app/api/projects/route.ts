import { getProjects } from "@/app/lib"
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const tags = searchParams.get('tags');
  console.log(category, search, tags)

  const projects = await getProjects();

  if (category) {
    const categoryProjects = projects.filter(function (pg) {
      return pg.category = category;
    });
    return Response.json(categoryProjects);
  }


  if (!category && !search && !tags) {
    return Response.json(projects)
  }

  return Response.json([])

}