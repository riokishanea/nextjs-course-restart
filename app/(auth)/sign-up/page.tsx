"use client";

import AuthForm from "@/components/form/AuthForm";
import { SignUpSchema } from "@/lib/validation";
import { z } from "zod";

const defaultValues = {
  name: "",
  username: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    // TODO: Implement sign up logic (call API)
    console.log("sign up", data);
    return { success: true };
  };

  return (
    <AuthForm
      schema={SignUpSchema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      formType="SIGN_UP"
    />
  );
};

export default SignUp;
