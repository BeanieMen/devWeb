import React from "react";
import Navbar from "../components/Navbar";

export const revalidate = 30;

function handleGit() {
  window.location.href = "https://github.com/BeanieMen";
}

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="ml-8 flex flex-col items-center justify-center"> 
        <div className="mt-10 ml flex flex-col md:flex-row gap-12 justify-center font-light">
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            About me
          </span>
        </div>
        <div className="mt-10 max-w-2xl mr-5 font-light text-left">
          <h1 className="text-xl">
            Hi, My name is Aarjav Jain. I am currently studying in 9th.
            I am mostly interested in making weird projects from weird APIs, libraries, and frameworks in the
            <span className="hover:underline text-primary hover:cursor-pointer"> typescript </span>
            language while also simultaneously trying to learn systems programming which has been a hard rock to break.
          </h1>
          <h1 className="text-xl  mt-7 mx-auto">
            My current interests are to program while not being a total shut-in and maintain my social life.
            For the future, I haven&apos;t really thought about what I am gonna do. But knowing myself, I know it&apos;s gonna be something funny.
          </h1>

          <h1 className="text-xl mt-7">
            As for now, My current projects which I have done aren&apos;t noteworthy enough to showcase; I will add them when I make them.
          </h1>
        </div>
      </div>
    </main>
  );
}
