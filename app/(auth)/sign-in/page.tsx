import AuthForm from "@/components/AuthForm";
import { SchemaTypes } from "@/lib/utils";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex-center max-sm:px-2 size-full">
      <AuthForm type={SchemaTypes.SignIn} />
    </section>
  );
};

export default SignIn;
