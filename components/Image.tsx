import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Paragraph({ blok }: { blok: any }) {
  return (
    <Image
      src={blok.image.filename}
      width={400}
      height={200}
      alt="image"
      {...storyblokEditable(blok)}
    />
  );
}
