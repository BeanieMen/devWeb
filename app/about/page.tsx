"use client";
import Navbar from "../components/Navbar";
export const revalidate = 30;

function handleGit() {
  window.location.href = "https://github.com/BeanieMen";
}


export default function About() {
  return (
    <main>
      <Navbar />
      <div className="ml-8">
        <div className="mt-10 ml flex flex-col md:flex-row gap-12 justify-center font-light">
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            About me
          </span>
        </div>
        <div className="mt-10 flex-col max-w-2xl items-center justify-center mx-auto font-light">
          <h1 className="text-xl text-justify">
            Hi, My name is Aarjav Jain. I am currently studying in 9th.
            I am mostly interested in making weird projects from weird apis, libraries and frameworks in the
            <span className="hover:underline text-primary hover:cursor-pointer"> typescript </span>
            language while also simultaneously trying to learn systems programming which has been a hard rock to break.
            
          </h1>
        </div>
      </div>
    </main>
  );
}
