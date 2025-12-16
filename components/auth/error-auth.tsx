import { CardWrapper } from "./card-wrapper";
import { AlertTriangle } from "lucide-react";

const ErrorAuth = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
      headerLabel="Oops! Something went wrong"
    >
      <div className="w-full flex justify-center items-center text-destructive">
        <AlertTriangle />
      </div>
    </CardWrapper>
  );
};

export default ErrorAuth;
