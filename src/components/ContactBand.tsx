import { contact } from "../lib/content";
import { MailIcon, PhoneIcon } from "./Icons";

/* Closing band on the Home and Projects pages: the owner's direct line and email. */
export default function ContactBand() {
  return (
    <section aria-labelledby="contact-band-heading" className="on-dark bg-ink text-white">
      <div className="wrap grid gap-x-16 gap-y-10 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <h2 id="contact-band-heading" className="text-[2.5rem] leading-[1.05] lg:text-[3.25rem]">
            Let’s work together
          </h2>
          <p className="mt-4 text-[1.25rem] text-haze">Trusted. Local. Industry-ready.</p>
        </div>

        <div className="lg:col-span-6">
          <p className="text-haze">
            {contact.name}, {contact.role}
          </p>
          <ul className="mt-4 border-t border-white/20">
            <li className="border-b border-white/20">
              <a
                href={contact.phoneHref}
                className="flex items-center gap-4 py-4 text-[1.5rem] leading-tight font-semibold whitespace-nowrap transition-colors duration-150 hover:text-arc sm:text-[1.75rem]"
              >
                <PhoneIcon width={24} height={24} className="shrink-0 text-arc" />
                {contact.phone}
              </a>
            </li>
            <li className="border-b border-white/20">
              <a
                href={contact.emailHref}
                className="flex items-center gap-4 py-4 text-[1.25rem] leading-tight font-semibold break-all transition-colors duration-150 hover:text-arc sm:text-[1.75rem]"
              >
                <MailIcon width={24} height={24} className="shrink-0 text-arc" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
