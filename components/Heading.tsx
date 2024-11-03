export default function Heading({
  level,
  children,
}: {
  level: 1 | 2;
  children: string;
}) {
  if (level === 1) {
    return (
      <h1 className="text-indigo-800 text-3xl lg:text-5xl mt-2 mb-2 font-extrabold">{children}</h1>
    );
  }
  if (level === 2) {
    return (
      <h2 className="text-indigo-800 text-2xl lg:text-3xl mb-2 font-bold">{children}</h2>
    );
  }
}
