import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { MarkdownResult } from "../types";

export const CustomReactMarkdown = ({
  children,
}: {
  children: MarkdownResult;
}) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }
          if (
            process.env.NEXT_PUBLIC_DOMAIN &&
            !href.includes(process.env.NEXT_PUBLIC_DOMAIN) &&
            !href.startsWith("/")
          ) {
            return <a href={href} {...props} rel="noopener noreferrer"></a>;
          }
          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    ></MDXRemote>
  );
};
