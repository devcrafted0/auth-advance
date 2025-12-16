"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        variant={"outline"}
        onClick={() => onClick("google")}
        size={"lg"}
        className="flex-1"
      >
        <FcGoogle className="w-10 h-10" />
      </Button>

      <Button
        variant={"outline"}
        onClick={() => onClick("github")}
        size={"lg"}
        className="flex-1"
      >
        <FaGithub className="w-10 h-10" />
      </Button>
    </div>
  );
};

export default Social;
