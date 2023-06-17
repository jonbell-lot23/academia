import React from "react";
import Link from "next/link";

const Index: React.FC = () => {
  return (
    <div className="container px-4 mx-auto mt-16">
      <h1 className="mb-4 text-3xl">Adventures in academia</h1>
      <nav>
        <ul>
          <li>
            <Link href="/journal" className="text-blue-500 hover:underline">
              Journal
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Index;
