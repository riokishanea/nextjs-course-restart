// /components/forms/AuthForm.tsx
"use client";

import {standardSchemaResolver} from "@hookform/resolvers/standard-schema";
import Link from "next/link";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: standardSchemaResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    // TODO: Authenticate User
    await onSubmit(data);
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="mt-10 space-y-6"
    >
      {Object.keys(defaultValues).map((field) => {
        const fieldName = field as Path<z.infer<typeof schema>>;
        const fieldState = form.getFieldState(fieldName);

        return (
          <Field key={field} className="flex w-full flex-col gap-2.5">
            <FieldLabel className="paragraph-medium text-dark400_light700">
              {field === "email"
                ? "Email Address"
                : field.charAt(0).toUpperCase() + field.slice(1)}
            </FieldLabel>
            <FieldContent>
              <Input
                required
                type={field === "password" ? "password" : "text"}
                {...form.register(fieldName)}
                className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
              />
            </FieldContent>
            <FieldError errors={fieldState?.error ? [{ message: fieldState.error.message }] : []} />
          </Field>
        );
      })}

      <Button
        disabled={form.formState.isSubmitting}
        className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter text-light-900!"
      >
        {form.formState.isSubmitting
          ? buttonText === "Sign In"
            ? "Signin In..."
            : "Signing Up..."
          : buttonText}
      </Button>

      {formType === "SIGN_IN" ? (
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href={ROUTES.SIGN_UP}
            className="paragraph-semibold primary-text-gradient"
          >
            Sign up
          </Link>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <Link
            href={ROUTES.SIGN_IN}
            className="paragraph-semibold primary-text-gradient"
          >
            Sign in
          </Link>
        </p>
      )}
    </form>
  );
};

export default AuthForm;