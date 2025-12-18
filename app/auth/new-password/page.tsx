import { NewPasswordForm } from "@/components/auth/new-password";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={null}>
      <NewPasswordForm />;
    </Suspense>
  );
};

export default Page;
