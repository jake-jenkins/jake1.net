import { storyblokEditable } from "@storyblok/react/rsc";

export default function Heading({ blok }: {blok: any}) {
  return (
    <h2 className="text-8xl text-red-700" {...storyblokEditable(blok)}>
      {blok.title}
    </h2>
  );
}
