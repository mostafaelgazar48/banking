"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function Sidebar({ user }: SidebarProps) {
  const pathName = usePathname();
  return (
    <section className="sidebar w-full">
      <nav className="flex flex-col gap-2">
        <Link className="mb-12  items-center flex gap-2" href={"/"}>
          <Image
            src={"/icons/logo.svg"}
            alt="Banking App Logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14 "
          />
          <h1 className="sidebar-logo">Banking</h1>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              href={link.route}
              key={link.label}
            >
              <div className="relative size-6 ">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {link.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

export default Sidebar;
