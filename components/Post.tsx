import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function Post({ blok }: {blok: any}) {
  return (
    <main {...storyblokEditable(blok)}>
      <div className="container mx-auto px-4 py-8">
      {blok.body.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      </div>
    </main>
  );
}
