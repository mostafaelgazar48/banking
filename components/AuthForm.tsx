"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FormInput from "./FormInput";
import { AuthSignUpSchema, AuthSignUpType, SchemaTypes } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { set, z } from "zod";
import { signIn, signUp } from "@/lib/actions/user.action";

const AuthForm = ({ type }: { type: SchemaTypes }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const authFormSchema = AuthSignUpSchema(type);
  const signUpFormOptions = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(AuthSignUpSchema(type)),
  });

  async function onSubmit(values: z.infer<typeof authFormSchema>) {
    try {
      setIsLoading(true);
      // Call the API to sign up or sign in
      if (type === SchemaTypes.SignUp) {
        const user = await signUp(values);
        setUser(user);
      }
      if (type === SchemaTypes.SignIn) {
        await signIn(values);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex flex-col  justify-center gap-5 min-h-screen w-full max-w-[420px]">
      <header className="flex flex-col gap-5 ">
        <Link className="mb-6 flex gap-1" href={"/"}>
          <Image
            src={"/icons/logo.svg"}
            alt="Banking App Logo"
            width={30}
            height={30}
            className=""
          />
          <h1 className="text-black-1 font-ibm-plex-serif text-26 ">Banking</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="font-semibold text-16 lg:text-36 text-gray-900">
            {user
              ? "Welcome back!"
              : type === "sign-up"
              ? "Sign Up"
              : "Sign In"}
          </h1>
          <p className="text-gray-500 text-12 lg:text-16">
            {user
              ? "Welcome back! Please enter your details."
              : "Please enter your details"}
          </p>
        </div>
      </header>

      {user ? (
        <div className="">{/* User is logged in */}</div>
      ) : (
        <>
          <Form {...signUpFormOptions}>
            <form
              onSubmit={signUpFormOptions.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              {type === "sign-up" && (
                <>
                  <div className="flex flex-row gap-3">
                    <FormInput<AuthSignUpType>
                      control={signUpFormOptions.control}
                      name="firstName"
                      type="text"
                      placeholder="Enter your firstname"
                      label="First Name"
                    />
                    <FormInput<AuthSignUpType>
                      control={signUpFormOptions.control}
                      name="lastName"
                      type="text"
                      placeholder="Enter your lastname"
                      label="Last Name"
                    />
                  </div>
                  <FormInput<AuthSignUpType>
                    control={signUpFormOptions.control}
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    label="address"
                  />
                  <div className="flex flex-row gap-3">
                    <FormInput<AuthSignUpType>
                      control={signUpFormOptions.control}
                      name="state"
                      type="text"
                      placeholder="Enter your state"
                      label="state"
                    />

                    <FormInput<AuthSignUpType>
                      control={signUpFormOptions.control}
                      name="postalCode"
                      type="text"
                      placeholder="Enter your postal code"
                      label="postal code"
                    />
                  </div>
                  <div className="flex flex-row gap-3">
                    <FormInput<AuthSignUpType>
                      control={signUpFormOptions.control}
                      name="dob"
                      type="text"
                      placeholder="yyyy-mm-dd"
                      label="dob"
                    />
                    <FormInput<AuthSignUpType>
                      control={signUpFormOptions.control}
                      name="ssn"
                      type="text"
                      placeholder="Enter your ssn"
                      label="ssn"
                    />
                  </div>
                </>
              )}

              <FormInput<AuthSignUpType>
                control={signUpFormOptions.control}
                name="email"
                type="email"
                placeholder="Enter your username"
                label="email"
              />

              <FormInput<AuthSignUpType>
                type="password"
                control={signUpFormOptions.control}
                name="password"
                placeholder="Enter your password"
                label="password"
              />
              <Button type="submit" className="form-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin w-6 h-6 mr-2" />
                    Loading...
                  </>
                ) : type === "sign-up" ? (
                  "Sign Up"
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>

          <footer className="flex justify-center  gap-1">
            <p className="text-gray-500 text-14 lg:text-16 py-0.5 lg:py-0">
              {type === "sign-up"
                ? "Already have an account ?"
                : "Don't have an account ?"}
            </p>
            <Link href={type === "sign-up" ? "/sign-in" : "/sign-up"}>
              <p className="text-16 lg:text-18 ">
                {type === "sign-up" ? "Sign In" : "Sign Up"}
              </p>
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;

interface FormData {
  email: string;
  password: string;
}
