import React from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNavbar from "@/components/MobileNavbar";

const RootLayout = (
    props: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <main className="flex h-screen w-full font-intre">
            <Sidebar user={{firstName: "John", lastName: "Doe"}}/>
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <div className="root-header">
                        <Image src={"/icons/logo.svg"} alt={"Mobile logo"} width={30} height={30}/>
                    </div>
                    <div>
                        <MobileNavbar user={{firstName: "John", lastName: "Doe"}}/>
                    </div>
                </div>
                {props.children}
            </div>
        </main>
    );
};

export default RootLayout;
