import Link from "next/link";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div className="p-4">
      <Heading level={1}>Landing Page</Heading>
      <Link href="/projects">Projects</Link>
    </div>
  );
}
