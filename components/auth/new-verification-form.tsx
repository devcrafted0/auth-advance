"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useCallback, useState } from "react";
import { BeatLoader } from "react-spinners";
import { CardWrapper } from "./card-wrapper";
import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | null>();
  const [success, setSuccess] = useState<string | null>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const onSumbit = useCallback(() => {
    setError(null);
    setSuccess(null);
    if (!token) {
      setError("Missing Token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSumbit();
  }, [onSumbit]);

  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      headerLabel="Confirming your verification"
    >
      <div className="flex justify-center items-center w-full">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success!} />
        <FormError message={error!} />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
