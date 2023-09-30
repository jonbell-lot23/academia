import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

const components = {
  a: ({ href, ...props }) => <Link href={href} {...props}></Link>,
};

export default function Layout({ children }) {
  return (
    <MDXProvider components={components}>
      <div className="container max-w-screen-md px-4 py-8 mx-auto bg-red-600 lg:px-8">
        <div className="mx-auto prose">{children}</div>
      </div>
    </MDXProvider>
  );
}
