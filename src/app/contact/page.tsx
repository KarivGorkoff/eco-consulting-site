import { MailIcon, PhoneIcon, PinIcon } from "../../components/Icons";
import TaggedPhoto from "../../components/TaggedPhoto";
import { company, contact, credentials, featuredProjects } from "../../lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Contact Charles Gorkoff, owner of ECO Consulting Ltd., licensed electrical contractors in Saskatoon, Saskatchewan. Phone 306-280-0006.",
};

export default function Contact() {
  // The Cory Mine fire alarm photo, framed on its left-hand panels. Falls back to the first featured project.
  const coryProject = featuredProjects.find((project) => project.id === "nutrien-cory");
  const photoProject = coryProject ?? featuredProjects[0];
  const photoFocus = coryProject ? "18% 55%" : photoProject.focus;

  return (
    <>
      <section>
        <div className="wrap grid gap-x-14 gap-y-12 py-14 sm:py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <h1 className="text-[2.75rem] leading-[1.05] tracking-[-0.022em] sm:text-[3.5rem] xl:text-[4rem]">
              Let’s work together
            </h1>
            <p className="mt-5 text-[1.25rem] leading-[1.45] text-steel">Trusted. Local. Industry-ready.</p>

            <h2 className="mt-12 text-[1.5rem] leading-tight">Get in touch</h2>
            <p className="mt-2 text-steel">
              {contact.name}, {contact.role}
            </p>

            <ul className="mt-6 border-t-2 border-ink">
              <li className="border-b border-rule">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-4 py-5 text-[1.5rem] leading-tight font-semibold whitespace-nowrap transition-colors duration-150 hover:text-signal sm:text-[1.75rem]"
                >
                  <PhoneIcon width={24} height={24} className="shrink-0 text-signal" />
                  <span className="sr-only">Phone: </span>
                  {contact.phone}
                </a>
              </li>
              <li className="border-b border-rule">
                <a
                  href={contact.emailHref}
                  className="flex items-center gap-4 py-5 text-[1.25rem] leading-tight font-semibold break-all transition-colors duration-150 hover:text-signal sm:text-[1.75rem]"
                >
                  <MailIcon width={24} height={24} className="shrink-0 text-signal" />
                  <span className="sr-only">Email: </span>
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-4 border-b border-rule py-5 text-[1.25rem] leading-tight font-medium">
                <PinIcon width={24} height={24} className="shrink-0 text-signal" />
                <span className="sr-only">Location: </span>
                {company.city}, {company.province}
              </li>
            </ul>
          </div>

          <TaggedPhoto
            photo={photoProject.photo}
            alt={photoProject.alt}
            site={photoProject.siteLabel}
            detail={photoProject.title}
            focus={photoFocus}
            sizes="(min-width: 64rem) 38rem, 100vw"
            priority
            className="aspect-[4/3] lg:col-span-6 lg:aspect-auto lg:min-h-[32rem]"
          />
        </div>
      </section>

      <section aria-label="Credentials" className="border-t border-rule bg-mist">
        <ul className="wrap grid gap-x-10 gap-y-6 py-12 sm:grid-cols-3 lg:py-14">
          {credentials.map((item) => (
            <li
              key={item}
              className="border-t-2 border-ink pt-4 text-[1.25rem] leading-snug font-semibold text-balance"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
