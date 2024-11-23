import { StoryblokStory, StoryblokServerComponent } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import { fetchStoryBySlug } from "@/app/lib";

export default async function Page({ params }) {
  const { story } = await fetchStoryBySlug(["home"]);
  const isDraftModeEnabled = true;

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
