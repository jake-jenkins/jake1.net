import Link from "next/link";
import Heading from "@/components/Heading";
import { getProject } from "./lib";
import Card from "@/components/Card";
import CheckIcon from "@/components/CheckIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jake Jenkins, Web Developer"
}

export default async function Home() {
  const feature1 = await getProject("gov-uk-portal");
  const feature2 = await getProject("online-pharmacy");
  const feature3 = await getProject("roundabout-uk-ios-and-android-mobile-app");

  return (
    <div className="px-12 py-8 container mx-auto">
      <div className="py-12">
        <span className="text-5xl lg:text-8xl font-extrabold text-lime-500">
          Delivering <span className="animate-pulse text-sky-700">awesome</span>
          <br /> web experiences.
        </span>
      </div>
      <Heading level={1}>Jake Jenkins, Web Developer.</Heading>
      <p className="text-lg mb-8">
        Jake Jenkins is a Lead Front end Developer with a range of skills and
        expertise to help businesses transform their online presence to help
        become market leaders. Jake has proven experience of delivering
        excellent user experience and meeting complex business challenges to
        deliver cutting edge services.
      </p>

      <div id="expertise" className="mb-8">
        <Heading level={2}>Expertise</Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <ul>
            <li>
              <CheckIcon />
              Front end architecture and frameworks
            </li>
            <li>
              <CheckIcon />
              NextJs
            </li>
            <li>
              <CheckIcon />
              NodeJs
            </li>
            <li>
              <CheckIcon />
              HTML, CSS and JavaScript
            </li>
          </ul>
          <ul>
            <li>
              <CheckIcon />
              Web API
            </li>
            <li>
              <CheckIcon />
              Prisma and relational databases (ORM)
            </li>
            <li>
              <CheckIcon />
              Authentication
            </li>
            <li>
              <CheckIcon />
              Content management systems
            </li>
          </ul>
          <ul>
            <li>
              <CheckIcon />
              Web security
            </li>
            <li>
              <CheckIcon />
              Multi-lingual support
            </li>
            <li>
              <CheckIcon />
              DevOps and deployment
            </li>
            <li>
              <CheckIcon />
              Cloud
            </li>
          </ul>
        </div>
      </div>

      <div id="production" className="mb-8">
        <Heading level={2}>Production code trusted by</Heading>
        <p>Logos</p>
      </div>

      <div className="my-8 border-y-8 py-4 border-lime-400">
        <span className="text-sky-800 text-2xl lg:text-3xl mb-2 font-bold">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Card project={feature1.frontmatter} />
          <Card project={feature2.frontmatter} />
          <Card project={feature3.frontmatter} />
        </div>
      </div>

      <Link
        className="bg-lime-300 px-4 py-2 inline-block text-xl mb-8"
        href="/projects"
      >
        All Projects
      </Link>
    </div>
  );
}
