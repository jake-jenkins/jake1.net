export default function Heading({
  level,
  children,
}: {
  level: 1 | 2;
  children: string;
}) {
  if (level === 1) {
    return (
      <h1 className="text-sky-800 text-4xl mt-2 mb-4 font-extrabold">{children}</h1>
    );
  }
  if (level === 2) {
    return (
      <h2 className="text-sky-800 text-2xl mb-4 font-medium">{children}</h2>
    );
  }
}