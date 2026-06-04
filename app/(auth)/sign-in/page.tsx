"use client";

import AuthForm from "@/components/form/AuthForm";
import { SignInSchema } from "@/lib/validation";
import { z } from "zod";


const defaultValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    // TODO: Implement sign in logic (call API)
    console.log('sign in', data);
    return { success: true };
  };

  return (
    <AuthForm
      schema={SignInSchema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      formType="SIGN_IN"
    />
  );
};

export default SignIn;