import React from "react";
import Link from "next/link";
import Image from "next/image";
import BankCard from "./BankCard";

function RightSidebar({ user, transactions, banks }: RightSidebarProps) {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-4xl font-semibold text-black-1">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href={"/"} className="flex gap-2">
            <Image
              src={"/icons/plus.svg"}
              alt="Add bank"
              width={20}
              height={20}
            />
            <span className="text-gray-500 text-md ">Add Bank</span>
          </Link>
        </div>

        {banks.length && (
          <div className="relative flex flex-1flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                account={banks[1]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute z-0 right-0 top-8 w-[90%]">
                <BankCard
                  account={banks[0]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
}

export default RightSidebar;
