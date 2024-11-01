import Link from "next/link";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div className="px-16 py-8 container mx-auto">
      <div className="py-12">
        <span className="text-6xl lg:text-8xl font-extrabold text-lime-500">Delivering awesome web experiences.</span>
      </div>
      <Heading level={1}>Portfolio - Jake Jenkins, Web Developer.</Heading>
      <Link href="/projects">Projects</Link>
    </div>
  );
}
