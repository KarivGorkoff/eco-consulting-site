"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, contact, navigation } from "../lib/content";
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon } from "./Icons";
import logo from "../../public/eco-logo.png";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the phone menu after moving to another page, or on Escape.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Links to a section of the home page (/#services) are never marked as the current page.
  const isCurrent = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      {/* Utility bar: where the firm is and how to reach it. Scrolls away with the page. */}
      <div className="on-dark bg-ink text-[0.875rem] text-white">
        <div className="wrap flex min-h-10 items-center justify-between gap-6 py-2">
          <p className="text-haze">
            <span className="hidden sm:inline">Licensed electrical contractors, </span>
            {company.city}, {company.provinceCode}
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-2 font-medium whitespace-nowrap hover:text-arc"
              >
                <PhoneIcon width={16} height={16} />
                {contact.phone}
              </a>
            </li>
            <li className="hidden md:block">
              <a href={contact.emailHref} className="flex items-center gap-2 font-medium hover:text-arc">
                <MailIcon width={16} height={16} />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-rule bg-white">
        <div className="wrap flex h-[4.5rem] items-center justify-between gap-6 lg:h-[5.5rem]">
          <Link href="/" className="shrink-0" aria-label={`${company.name} home`}>
            <Image
              src={logo}
              alt={company.name}
              width={123}
              height={60}
              priority
              className="h-12 w-[6.125rem] object-contain lg:h-[3.75rem] lg:w-[7.6875rem]"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navigation.map((item) =>
                item.href === "/contact" ? (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="btn btn-primary"
                      aria-current={isCurrent(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isCurrent(item.href) ? "page" : undefined}
                      className="border-b-2 border-transparent py-2 font-medium transition-colors duration-150 hover:border-signal hover:text-signal aria-[current=page]:border-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <button
            type="button"
            className="-mr-2 flex items-center gap-2 rounded-[3px] px-2 py-2 font-medium lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="phone-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Menu for phones and small tablets. */}
        <nav
          id="phone-menu"
          aria-label="Main"
          hidden={!menuOpen}
          className="absolute inset-x-0 top-full border-b border-rule bg-white shadow-[0_18px_30px_-18px_rgb(15_28_46/0.35)] lg:hidden"
        >
          <ul className="wrap pb-3">
            {navigation.map((item) => (
              <li key={item.href} className="border-t border-rule">
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-[1.25rem] font-medium aria-[current=page]:text-signal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
