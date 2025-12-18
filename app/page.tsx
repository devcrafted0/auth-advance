import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Page = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-400">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-bold text-white drop-shadow-md",
            font.className
          )}
        >
          Auth
        </h1>

        <p className="text-white text-xl">A simple authentication service</p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button size="lg" variant="secondary" className="cursor-pointer">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default Page;
