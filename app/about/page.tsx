// Import necessary libraries/components
"use client";
import Image from "next/image";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// Set revalidate value
export const revalidate = 30; // revalidate at most 30 seconds

// Function to handle GitHub button click
function handleGit() {
  window.location.href = "https://github.com/BeanieMen";
}


// About component
export default function About() {
  return (
    <main className="p-4">
      {/* Introduction Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-12">
        <Image
          className="rounded-full mb-4 md:mb-0"
          alt="image"
          src="/kiggy.png"
          width={175}
          height={175}
        />
        <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Hi, I am <span className="text-primary">Beanie</span>
        </span>
      </div>
      <div className="mt-10 flex justify-center ">
        <h1>I do random <span className="text-primary"> REEEEE </span>stuff while being an absolute maniac</h1>
      </div>

      <div className="mt-2 flex justify-center ">
        <h1>Check out the <Link className="text-primary" href={"/"}>Blog</Link></h1>
      </div>
      <div className="align-bottom mt-10">
        <div className="mt-5 flex justify-center ">
          <h1>Here are my <span className="text-primary">Socials</span></h1>
        </div>
        <div className="flex justify-center mt-3 gap-3">

          <Button variant="outline" size="icon" onClick={handleGit}>
            <Github className="prose-invert dark:rotate-0 dark:scale-200" />
          </Button>
        </div>
      </div>
    </main>
  );
}
