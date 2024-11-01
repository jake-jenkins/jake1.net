import { getProjects } from "@/app/lib"
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');

  let projects = await getProjects();

  if (category) {
    const filtered = projects.filter(function (pg) {
      return pg.category = category;
    });
    projects = filtered
  }

  return Response.json(projects)

}