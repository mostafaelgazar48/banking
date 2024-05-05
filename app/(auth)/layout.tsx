import React from "react";

const AuthLayout = (
  props: Readonly<{
    children: React.ReactNode;
  }>
) => {
  return <main>{props.children}</main>;
};

export default AuthLayout;
