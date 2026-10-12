import Image from "next/image";
import Link from "next/link";
import { company, contact, navigation } from "../lib/content";
import logoWhite from "../../public/eco-logo-white.png";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink-deep text-white">
      <div className="wrap grid gap-x-10 gap-y-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image
            src={logoWhite}
            alt={company.name}
            width={147}
            height={72}
            className="h-[4.5rem] w-[9.1875rem] object-contain"
          />
          <p className="mt-6 max-w-[34ch] text-haze">
            Electrical contractors serving industrial, mining, and power generation clients across Western Canada.
          </p>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-[1.0625rem]">Contact</h2>
          <ul className="mt-4 space-y-2 text-haze">
            <li>
              {contact.name}, {contact.role}
            </li>
            <li>
              <a href={contact.phoneHref} className="text-link whitespace-nowrap text-white">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="text-link text-white">
                {contact.email}
              </a>
            </li>
            <li>
              {company.city}, {company.province}
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-[1.0625rem]">Pages</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-haze transition-colors duration-150 hover:text-white">
                Home
              </Link>
            </li>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-haze transition-colors duration-150 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap flex flex-wrap justify-between gap-x-8 gap-y-2 py-6 text-[0.875rem] text-haze">
          <p>
            © {year} {company.name} All rights reserved.
          </p>
          <p>
            {company.trade}, {company.city}, {company.provinceCode}
          </p>
        </div>
      </div>
    </footer>
  );
}
