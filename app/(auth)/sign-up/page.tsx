import AuthForm from "@/components/AuthForm";
import { SchemaTypes } from "@/lib/utils";
import React from "react";

const SignUp = () => {
  return (
    <section className="flex-center max-sm:px-2 size-full">
      <AuthForm type={SchemaTypes.SignUp} />
    </section>
  );
};
export default SignUp;
