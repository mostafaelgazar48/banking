"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function MobileNavbar({ user }: MobileNavProps) {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            alt={"Hamburger menu"}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-white border-none ">
          <Link className="mb-6 flex gap-1" href={"/"}>
            <Image
              src={"/icons/logo.svg"}
              alt="Banking App Logo"
              width={30}
              height={30}
              className=""
            />
            <h1 className="text-black-1 font-ibm-plex-serif ">Banking</h1>
          </Link>
          <div className="mobilenav-sheet">
            <nav className="flex h-full flex-col gap-6">
              {sidebarLinks.map((link) => {
                const isActive =
                  pathName === link.route ||
                  pathName.startsWith(`${link.route}/`);
                return (
                  <SheetClose asChild key={link.route}>
                    <Link
                      className={cn("mobilenav-sheet_close w-full", {
                        "bg-bank-gradient": isActive,
                      })}
                      href={link.route}
                      key={link.label}
                    >
                      <Image
                        src={link.imgURL}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={cn({ "brightness-[3] invert-0": isActive })}
                      />
                      <p className={cn("text-sm", { "!text-white": isActive })}>
                        {link.label}
                      </p>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNavbar;
