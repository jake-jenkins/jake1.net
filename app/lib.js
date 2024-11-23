export async function fetchStoryBySlug(slug) {
  const contentVersion = "draft"
  const cv = new Date().getTime() / 1000;

  const searchParamsData = {
    token: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
    cv,
    version: contentVersion,
  };

  const searchParams = new URLSearchParams(searchParamsData);

  const { story } = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${
      slug?.join("/") || ""
    }?${searchParams.toString()}`,
    {
      next: {
        tags: ["page"],
      },
    }
  ).then((res) => res.json());

  return {
    story: story,
  };
}
