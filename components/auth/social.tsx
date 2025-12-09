"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        variant={"outline"}
        onClick={() => {}}
        size={"lg"}
        className="flex-1"
      >
        <FcGoogle className="w-10 h-10" />
      </Button>

      <Button
        variant={"outline"}
        onClick={() => {}}
        size={"lg"}
        className="flex-1"
      >
        <FaGithub className="w-10 h-10" />
      </Button>
    </div>
  );
};

export default Social;
