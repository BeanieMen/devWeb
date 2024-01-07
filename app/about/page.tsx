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
          <h1 className="text-xl text-justify mt-7">
            My current interests are to program while not being a total shut-in and maintain my social life.
            For the future i havent reall thought about what i am gonna do. But knowing myself, I know its gonna be something funny
          </h1>

          <h1 className="text-xl text-justify mt-7">
            As for now, My current projects which i have done arent noteworthy enough to showcase, I will add them when i make them
          </h1>
        </div>
      </div>
    </main>
  );
}
