import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href={"/"} className="bank-card">
        <div className="bank-card_content">
          <div className="">
            <h1 className="text-16 font-semibold text-white">
              {account.name || "CIB Bank"}
            </h1>
            <p className="font-ibm-plex-serif text-white">
              {formatAmount(account.currentBalance || 0)}
            </p>
          </div>
          <article>
            <div className="flex justify-between gap-5">
              <h2 className=" text-white text-12 font-semibold tracking-[1.2px]">
                {userName}
              </h2>
              <span className="text-white font font-semibold">
                {" "}
                {`** / **`}
              </span>
            </div>
            <p className="text-white text-12">
              {`**** **** **** ${account.mask} `}
            </p>
          </article>
        </div>
        <div className=" flex flex-1 flex-col justify-between items-end  p-4 rounded-r-[20px] bg-bank-gradient border-white ga">
          <Image
            src={"/icons/Paypass.svg"}
            alt="Paypass logo"
            width={20}
            height={24}
          />

          <Image
            src={"/icons/mastercard.svg"}
            alt="Visa logo"
            width={55}
            height={45}
            className="ml-2"
          />

          <Image
            src={"/icons/lines.png"}
            alt="Lines"
            width={300}
            height={400}
            className="absolute top-0 right-0"
          />
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
