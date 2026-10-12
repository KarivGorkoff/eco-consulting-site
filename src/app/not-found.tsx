import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section>
      <div className="wrap py-24 lg:py-32">
        <h1 className="text-[2.75rem] leading-[1.05] tracking-[-0.022em] sm:text-[3.5rem]">Page not found</h1>
        <p className="mt-5 max-w-[44ch] text-[1.25rem] leading-[1.45] text-steel">
          This address does not match a page on this site. It may have moved, or the link may be out of date.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Go to the home page
          </Link>
          <Link href="/projects" className="btn btn-outline">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
