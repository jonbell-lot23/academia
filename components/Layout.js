import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

const components = {
  a: ({ href, ...props }) => (
    <Link href={href}>
      <a {...props} />
    </Link>
  ),
};

export default function Layout({ children }) {
  return (
    <MDXProvider components={components}>
      <div>{children}</div>
    </MDXProvider>
  );
}
