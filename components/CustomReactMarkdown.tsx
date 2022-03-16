import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

export const CustomReactMarkdown = ({
  children,
}: {
  children: MDXRemoteSerializeResult<Record<string, unknown>>;
}) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
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
