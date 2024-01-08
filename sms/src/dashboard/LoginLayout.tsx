import React from "react";

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout = (props: LoginLayoutProps) => {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      {props.children}
    </div>
  );
};

export default LoginLayout;
