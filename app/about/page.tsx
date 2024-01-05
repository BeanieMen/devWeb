"use client";
import Image from "next/image";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
export const revalidate = 30; // revalidate at most 30 seconds
function handleGit() {
  window.location.href = "https://github.com/BeanieMen";
}

export default function About() {
  return (
    <main>
      <div className="justify-center flex mt-20 gap-5 ">
        <span className="text-5xl mr-16 items-center flex">
          Hi, I am <span className="text-primary">&nbsp;Beanie</span>
        </span>
        <Image
          className=" flex rounded-full"
          alt="image"
          src="/kiggy.png"
          width={200}
          height={200}
        />
      </div>
      <div className="justify-center flex mt-20 gap-5">
        <Button variant="outline" size="icon" onClick={handleGit}>
          <Github className="prose-invert dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </main>
  );
}
