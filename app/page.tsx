import Link from "next/link";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div className="px-16 py-8 container mx-auto">
      <div className="py-12">
        <span className="text-6xl lg:text-8xl font-extrabold text-lime-500">Delivering awesome web experiences.</span>
      </div>
      <Heading level={1}>Jake Jenkins, Web Developer.</Heading>
      <p className="text-lg">Jake Jenkins is a Lead Front end Developer with a range of skills and expertise to help businesses transform their online presence to help become market leaders. Jake has proven experience of delivering excellent user experience and meeting complex business challenges to deliver cutting edge services.</p>

      <Heading level={2}>Production code trusted by</Heading>
      <p>Logos</p>
      <div className="bg-slate-100 mb-8">
        <span className="text-sky-800 text-2xl lg:text-3xl mb-2 font-bold">Apps</span>
        <p>Floating projects.</p>
      </div>

      <div className="bg-slate-100 mb-8">
        <span className="text-sky-800 text-2xl lg:text-3xl mb-2 font-bold">Websites</span>
        <p>Floating projects.</p>
      </div>

      <div className="bg-slate-100 mb-8">
        <span className="text-sky-800 text-2xl lg:text-3xl mb-2 font-bold">Integrations</span>
        <p>Floating projects.</p>
      </div>

      <Heading level={2}>Expertise</Heading>
      <p>Present a list in a super funky way.</p>

      <Link href="/projects">Projects</Link>
    </div>
  );
}
