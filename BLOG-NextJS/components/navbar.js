"use client";

import { Fragment } from "react";
import {  Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";

export default function Navbar(props) {
  const leftmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];

  const mobilemenu = [...leftmenu];

  return (
      <Container>
        <nav>
          <Disclosure>
            {({ open }) => (
                <>
                  <div className="flex flex-wrap items-center justify-between md:flex-nowrap md:gap-10">
                    {/* Logo and Hamburger in the same flex container */}
                    <div className="flex w-full items-center justify-between md:w-auto">
                      <Link href="http://localhost:5173/" className="text-3xl font-bold">
                        <span className="text-teal-600">DAS</span>
                        <span className="text-orange-400">medhub</span>
                      </Link>
                      <Disclosure.Button
                          aria-label="Toggle Menu"
                          className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
                        <svg
                            className="h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                          {open && (
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                              />
                          )}
                          {!open && (
                              <path
                                  fillRule="evenodd"
                                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                              />
                          )}
                        </svg>
                      </Disclosure.Button>
                    </div>

                    <div className="order-1 hidden w-full flex-col items-center justify-end md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                      {leftmenu.map((item, index) => (
                          <Fragment key={`${item.label}${index}`}>
                            <Link
                                href={item.href}
                                key={`${item.label}${index}`}
                                className="px-5 py-2 text-lg font-semibold text-gray-600 hover:text-teal-500 dark:text-gray-400">
                              {item.label}
                            </Link>
                          </Fragment>
                      ))}
                    </div>
                  </div>
                  <Disclosure.Panel>
                    <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                      {mobilemenu.map((item, index) => (
                          <Fragment key={`${item.label}${index}`}>
                            <Link
                                href={item.href}
                                key={`${item.label}${index}`}
                                className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-teal-500 dark:text-gray-400">
                              {item.label}
                            </Link>
                          </Fragment>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
            )}
          </Disclosure>
        </nav>
      </Container>
  );
}
