// Import necessary libraries/components
"use client";
import Image from "next/image";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "../components/Navbar";
// Set revalidate value
export const revalidate = 30; // revalidate at most 30 seconds

// Function to handle GitHub button click
function handleGit() {
  window.location.href = "https://github.com/BeanieMen";
}


// About component
export default function About() {
  return (
    <main>
      <Navbar />
      <div className="ml-8">
        <div className="mt-10 ml flex flex-col md:flex-row gap-12">
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Hi, I am <span className="text-primary">Beanie</span>
          </span>
        </div>
        <div className="mt-10 flex ">
          <h1>I do random <span className="text-primary"> REEEEE </span>stuff while being an absolute maniac</h1>
        </div>

        <div className="mt-2 flex ">
          <h1>Check out the <Link className="text-primary" href={"/"}>Blog</Link></h1>
        </div>
        <div className="align-bottom mt-10">
          <div className="mt-5 flex  ">
            <h1>Here are my <span className="text-primary">Socials</span></h1>
          </div>
          <div className="flex mt-3 gap-3">
            <Button variant="outline" size="icon" onClick={handleGit}>
              <Github className="prose-invert dark:rotate-0 dark:scale-200" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
