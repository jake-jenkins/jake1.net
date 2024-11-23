import { storyblokEditable } from "@storyblok/react/rsc";

export default function Heading({ blok }: { blok: any }) {
  if (blok.level[0] === "1") {
    <h1
      className="text-indigo-800 text-3xl lg:text-5xl mt-2 mb-2 font-extrabold"
      {...storyblokEditable(blok)}
    >
      {blok.title}
    </h1>;
  } else {
    return (
      <h2
        className="text-indigo-800 text-2xl lg:text-3xl mb-2 font-bold"
        {...storyblokEditable(blok)}
      >
        {blok.title}
      </h2>
    );
  }
}
