import NewVerificationForm from "@/components/auth/new-verification-form";
import { Suspense } from "react";

const VerificationPage = () => {
  return (
    <Suspense fallback={null}>
      <NewVerificationForm />;
    </Suspense>
  );
};

export default VerificationPage;
