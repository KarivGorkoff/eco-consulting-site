import Link from "next/link";
import ContactBand from "../components/ContactBand";
import { PhoneIcon } from "../components/Icons";
import ServiceSymbol from "../components/ServiceSymbol";
import TaggedPhoto from "../components/TaggedPhoto";
import { companyFacts, contact, featuredProjects, keyClients, services } from "../lib/content";

export default function Home() {
  // The first featured project is the hero photo; the next two appear under "Featured projects".
  const heroProject = featuredProjects[0];
  const otherProjects = featuredProjects.slice(1, 3);

  return (
    <>
      {/* HERO */}
      <section className="hero border-b border-rule">
        <div className="hero-copy flex flex-col justify-center py-14 sm:py-20 lg:min-h-[34rem]">
          <h1 className="text-[2.5rem] leading-[1.05] tracking-[-0.022em] sm:text-[3.25rem] lg:text-[3rem] xl:text-[3.5rem]">
            Electrical contractors for mining, industry, and power generation.
          </h1>
          <p className="mt-6 text-[1.25rem] leading-[1.45] font-medium">Saskatchewan-based. Industry-trusted.</p>
          <p className="mt-1 text-[1.25rem] leading-[1.45] text-steel">
            Serving clients across Western Canada for 15+ years.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary w-full sm:w-auto">
              View projects
            </Link>
            <a href={contact.phoneHref} className="btn btn-outline w-full sm:w-auto">
              <PhoneIcon width={18} height={18} />
              Call {contact.phone}
            </a>
          </div>
        </div>

        <TaggedPhoto
          photo={heroProject.photo}
          alt={heroProject.alt}
          site={heroProject.siteLabel}
          detail={heroProject.title}
          focus={heroProject.focus}
          sizes="(min-width: 64rem) 50vw, 100vw"
          priority
          className="hero-photo aspect-[4/3] lg:aspect-auto"
        />
      </section>

      {/* KEY CLIENTS */}
      <section aria-labelledby="clients-heading" className="border-b border-rule bg-mist">
        <div className="wrap grid gap-x-12 gap-y-5 py-9 lg:grid-cols-[11rem_1fr] lg:items-center">
          <h2 id="clients-heading" className="text-[1.0625rem] font-medium tracking-normal text-steel">
            Key clients
          </h2>
          <ul className="grid gap-y-4 sm:grid-cols-3">
            {keyClients.map((item) => (
              <li
                key={item.client}
                className="sm:border-l sm:border-rule sm:pl-6 max-lg:first:border-l-0 max-lg:first:pl-0"
              >
                <span className="block text-[1.375rem] leading-tight font-semibold">{item.client}</span>
                <span className="mt-1 block text-steel">{item.sites}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" aria-labelledby="services-heading" className="py-20 lg:py-28">
        <div className="wrap">
          <h2 id="services-heading" className="text-[2.25rem] leading-[1.1] lg:text-[2.75rem]">
            What we do
          </h2>
          <ul className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.title} className="border-t-2 border-ink pt-6">
                <ServiceSymbol name={service.symbol} />
                <h3 className="mt-6 text-[1.375rem] leading-tight">{service.title}</h3>
                <p className="mt-2.5 max-w-[40ch] text-steel">{service.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section aria-labelledby="featured-heading" className="pb-20 lg:pb-28">
        <div className="wrap">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h2 id="featured-heading" className="text-[2.25rem] leading-[1.1] lg:text-[2.75rem]">
              Featured projects
            </h2>
            <Link href="/projects" className="text-link font-medium">
              View projects
            </Link>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-12">
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className={project.orientation === "portrait" ? "md:col-span-5" : "md:col-span-7"}
              >
                <TaggedPhoto
                  photo={project.photo}
                  alt={project.alt}
                  site={project.siteLabel}
                  focus={project.focus}
                  sizes={
                    project.orientation === "portrait"
                      ? "(min-width: 48rem) 40vw, 100vw"
                      : "(min-width: 48rem) 56vw, 100vw"
                  }
                  className={`md:aspect-auto md:h-[24rem] lg:h-[34rem] ${
                    project.orientation === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]"
                  }`}
                />
                <h3 className="mt-5 text-[1.375rem] leading-tight">{project.title}</h3>
                <p className="mt-1.5 text-steel">{project.scope}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" aria-labelledby="about-heading" className="border-t border-rule bg-mist py-20 lg:py-28">
        <div className="wrap grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="about-heading" className="text-[2.25rem] leading-[1.1] lg:text-[2.75rem]">
              About ECO Consulting
            </h2>
            <p className="mt-8 text-[1.375rem] leading-[1.35] font-medium tracking-[-0.01em] lg:text-[1.625rem]">
              A Saskatchewan-based electrical contracting and consulting firm with decades of hands-on experience across
              some of Canada’s most demanding industrial environments.
            </p>
            <p className="mt-6 max-w-[58ch] text-steel">
              Our team specializes in complex projects and demanding industrial settings—bringing certified expertise,
              best-in-class safety, and responsive, reliable leadership to every job site we serve.
            </p>
          </div>

          <dl className="self-start border-t-2 border-ink lg:col-span-5">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[8.5rem_1fr] gap-x-4 border-b border-rule py-3.5">
                <dt className="text-steel">{fact.label}</dt>
                <dd className="font-medium text-balance">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
