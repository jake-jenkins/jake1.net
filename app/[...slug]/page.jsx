import { StoryblokStory, StoryblokServerComponent } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import { fetchStoryBySlug } from "@/app/lib";

export default async function Page({ params }) {
  const correctPath = (await params).slug;
  const isDraftModeEnabled = true;
  const { story } = await fetchStoryBySlug(correctPath);

  if (!story) {
    return <div>404</div>;
  }

  if (isDraftModeEnabled) {
    return (
      <StoryblokProvider>
        <StoryblokStory story={story} />
      </StoryblokProvider>
    );
  }

  return <StoryblokServerComponent blok={story.content} />;
}
