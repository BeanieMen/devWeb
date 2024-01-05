// Import necessary libraries/components
"use client";
import Image from "next/image";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <Image
          className="rounded-full mb-4 md:mb-0"
          alt="image"
          src="/kiggy.png"
          width={200}  // Adjust the initial width based on your design
          height={200} // Adjust the initial height based on your design
        />
        <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Hi, I am <span className="text-primary">&nbsp;Beanie</span>
        </span>
      </div>

      {/* GitHub Button Section */}
      <div className="flex justify-center mt-20">
        <Button variant="outline" size="icon" onClick={handleGit}>
          <Github className="prose-invert dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </main>
  );
}
