import { storyblokEditable } from "@storyblok/react/rsc";

export default function Grid({ blok }: {blok: any}) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.right ? (
        <div className="flex">
          <div>{blok.image.filename}</div>
          <div className="flex-1 bg-slate-200 p-4">{blok.content}</div>
        </div>
      ) : (
        <div className="flex">
        <div className="flex-1 bg-slate-200 p-4">{blok.content}</div>
        <div>image</div>
      </div>
      )}
    </div>
  );
}
