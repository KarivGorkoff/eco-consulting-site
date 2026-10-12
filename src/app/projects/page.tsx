import ContactBand from "../../components/ContactBand";
import TaggedPhoto from "../../components/TaggedPhoto";
import { featuredProjects, multiSiteWork, siteProjects } from "../../lib/content";

export const metadata = {
  title: "Projects",
  description:
    "Featured projects and past work by ECO Consulting Ltd. for Nutrien, Mosaic, and Orano: power distribution, process controls, switchgear, and fire alarm systems.",
};

export default function Projects() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="border-b border-rule">
        <div className="wrap grid gap-x-10 gap-y-8 py-14 sm:py-16 lg:grid-cols-12 lg:items-end lg:py-20">
          <div className="lg:col-span-8">
            <h1 className="text-[2.75rem] leading-[1.05] tracking-[-0.022em] sm:text-[3.5rem] xl:text-[4rem]">
              Projects
            </h1>
            <p className="mt-5 max-w-[46ch] text-[1.25rem] leading-[1.45] text-steel">
              Featured work and past projects for industrial, mining, and power generation clients across Western
              Canada.
            </p>
          </div>
          <nav aria-label="On this page" className="lg:col-span-4">
            <ul className="border-t-2 border-ink">
              <li className="border-b border-rule">
                <a href="#featured" className="block py-3 font-medium transition-colors duration-150 hover:text-signal">
                  Featured projects
                </a>
              </li>
              <li className="border-b border-rule">
                <a
                  href="#past-projects"
                  className="block py-3 font-medium transition-colors duration-150 hover:text-signal"
                >
                  Key clients and past projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="featured" aria-labelledby="featured-heading" className="py-16 lg:py-24">
        <div className="wrap">
          <h2 id="featured-heading" className="text-[2.25rem] leading-[1.1] lg:text-[2.75rem]">
            Featured projects
          </h2>

          <div className="mt-10 grid gap-y-16 lg:mt-14 lg:gap-y-24">
            {featuredProjects.map((project, index) => {
              const portrait = project.orientation === "portrait";
              const photoOnRight = index % 2 === 1;

              return (
                <article key={project.id} className="grid items-center gap-x-10 gap-y-7 md:grid-cols-12">
                  <TaggedPhoto
                    photo={project.photo}
                    alt={project.alt}
                    site={project.siteLabel}
                    focus={project.focus}
                    sizes={portrait ? "(min-width: 48rem) 40vw, 100vw" : "(min-width: 48rem) 56vw, 100vw"}
                    priority={index === 0}
                    className={[
                      portrait ? "aspect-[4/5] md:col-span-5" : "aspect-[4/3] md:col-span-7",
                      photoOnRight ? (portrait ? "md:order-2 md:col-start-8" : "md:order-2") : "",
                    ].join(" ")}
                  />

                  <div
                    className={[portrait ? "md:col-span-6" : "md:col-span-5", photoOnRight ? "md:order-1" : ""].join(
                      " ",
                    )}
                  >
                    <h3 className="text-[1.75rem] leading-[1.12] lg:text-[2.125rem]">{project.title}</h3>
                    <dl className="mt-7 border-t-2 border-ink">
                      {[
                        ["Client", project.client],
                        ["Site", project.site],
                        ["Scope", project.scope],
                      ].map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[5rem_1fr] gap-x-4 border-b border-rule py-3.5">
                          <dt className="text-steel">{label}</dt>
                          <dd className="font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* KEY CLIENTS AND PAST PROJECTS */}
      <section
        id="past-projects"
        aria-labelledby="past-projects-heading"
        className="border-t border-rule bg-mist py-20 lg:py-28"
      >
        <div className="wrap">
          <h2 id="past-projects-heading" className="text-[2.25rem] leading-[1.1] lg:text-[2.75rem]">
            Trusted across Western Canada
          </h2>
          <p className="mt-4 text-[1.25rem] text-steel">Key clients and past projects.</p>

          {/* By client site */}
          <div className="mt-12 grid gap-x-10 pb-3 text-[0.9375rem] text-steel md:grid-cols-12">
            <h3 className="font-normal tracking-normal md:col-span-4">By client site</h3>
            <p aria-hidden="true" className="hidden md:col-span-8 md:block">
              Scope of work
            </p>
          </div>
          <ul className="border-t-2 border-ink">
            {siteProjects.map((project) => (
              <li
                key={`${project.client}-${project.site}`}
                className="grid gap-x-10 gap-y-3 border-b border-rule py-6 md:grid-cols-12"
              >
                <h4 className="text-[1.375rem] leading-tight font-semibold tracking-[-0.015em] md:col-span-4">
                  {project.client}
                  <span className="mt-1 block text-[1.0625rem] font-normal tracking-normal text-steel">
                    {project.site}
                  </span>
                </h4>
                <ul
                  className={`space-y-1.5 md:col-span-8 ${project.scope.length > 3 ? "sm:columns-2 sm:gap-x-10" : ""}`}
                >
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="relative break-inside-avoid pl-5 before:absolute before:top-[0.68em] before:left-0 before:size-[0.375rem] before:bg-signal"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Across several sites */}
          <div className="mt-14 grid gap-x-10 pb-3 text-[0.9375rem] text-steel md:grid-cols-12">
            <h3 className="font-normal tracking-normal md:col-span-4">Across multiple sites</h3>
            <p aria-hidden="true" className="hidden md:col-span-8 md:block">
              Scope of work
            </p>
          </div>
          <ul className="border-t-2 border-ink">
            {multiSiteWork.map((item) => (
              <li key={item.title} className="grid gap-x-10 gap-y-2 border-b border-rule py-6 md:grid-cols-12">
                <h4 className="text-[1.375rem] leading-tight font-semibold tracking-[-0.015em] md:col-span-4">
                  {item.title}
                </h4>
                <p className="md:col-span-8">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
