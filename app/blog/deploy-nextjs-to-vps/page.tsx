import Image from "next/image";
import Heading from "@/components/Heading";
import CheckIcon from "@/components/CheckIcon";
import Link from "next/link";

export default function EasyPanelPage() {
  return (
    <>
      <div className="heroWrapper">
        <Image
          priority
          src="/images/posts/server.webp"
          alt="image"
          className="heroImage border-b-4 border-lime-300"
          fill
        />
      </div>
      <div className="px-12 py-8 container mx-auto">
        <Heading level={1}>
          Deploy NextJs with EasyPanel to any cloud VPS with Zero Downtime
        </Heading>
        <ul className="list-inside my-8">
          <li className="flex items-center">
            <CheckIcon />
            Automatically deploy changes when you push to github
          </li>
          <li className="flex items-center">
            <CheckIcon />
            Easy setup, zero time deployment
          </li>
          <li className="flex items-center">
            <CheckIcon />
            Set environment variables
          </li>
          <li className="flex items-center">
            <CheckIcon />
            Host backend services
          </li>
          <li className="flex items-center">
            <CheckIcon />
            Use any cloud provider
          </li>
        </ul>
        <p>
          I use EasyPanel to automatically deploy NextJs apps with ease directly
          from github.
        </p>
        <p>Simple guide to follow...</p>
        <Link
          href="https://easypanel.io"
          className="inline-block py-2 px-4 bg-emerald-700 text-white mt-8"
        >
          Get started
        </Link>
      </div>
    </>
  );
}
