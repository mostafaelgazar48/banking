"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

/*
    * Sign up a user
   function is an async function that takes the form data as an argument. 
   It uses the createAdminClient function to create an admin Appwrite client and then calls 
   the createEmailPasswordSession method on the account object.
   This method takes the email and password as arguments and returns a session object.
    We then set the session secret in a cookie and redirect the user to the account page.
*/

export const signUp = async (data: SignUpParams) => {
  try {
    const { email, password, firstName, lastName } = data;
    const { account } = await createAdminClient();

    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("my-custom-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newAccount);
  } catch (error) {
    return error;
  }
};

export const signIn = async (data: SignUpParams) => {
  try {
    // const response = await fetch("https://api.example.com/signin", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // return await response.json();
    console.log(data);
  } catch (error) {
    return error;
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}
