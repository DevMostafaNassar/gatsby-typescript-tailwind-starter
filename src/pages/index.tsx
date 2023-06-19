import React from "react";
import type { HeadFC } from "gatsby";

const IndexPage = () => {
  return (
    <main className="flex relative min-h-screen bg-zinc-50 z-0">
      <div className="flex-1 self-center w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Hello world!
        </h1>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>
    Mostafa Nassar | Gatsby.js, Typescript, TailwindCSS, and Jest website
    starter.
  </title>
);
