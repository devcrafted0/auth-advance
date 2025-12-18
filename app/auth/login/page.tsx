import { LoginForm } from "@/components/auth/login-form";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={null}>
      <LoginForm />;
    </Suspense>
  );
};

export default Page;
