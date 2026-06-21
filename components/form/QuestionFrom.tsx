"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

import { Button } from "../ui/button";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { AskQuestionSchema } from "@/lib/validation";
import { useRef } from "react";
import { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import('@/components/Editor'), {
  ssr: false
})

const QuestionForm = () => {
  const editorRef = useRef<MDXEditorMethods>(null)

  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleCreateQuestion = (data: any) => {
    console.log(data);
  };

  return (
    <form
      className="flex w-full flex-col gap-10"
      onSubmit={form.handleSubmit(handleCreateQuestion)}
    >
      {/* TITLE */}
      <Controller
        control={form.control}
        name="title"
        render={({ field, fieldState }) => (
          <Field className="flex w-full flex-col">
            <FieldLabel className="paragraph-semibold text-dark400_light800">
              Question Title <span className="text-primary-500">*</span>
            </FieldLabel>

            <Input
              className="paragraph-regular background-light800_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-14 border"
              {...field}
            />

            <FieldDescription className="body-regular text-light-500 mt-2.5">
              Be specific and imagine you're asking a question to another
              person.
            </FieldDescription>

            {fieldState.error && (
              <FieldError>{fieldState.error.message}</FieldError>
            )}
          </Field>
        )}
      />

      {/* CONTENT */}
      <Controller
        control={form.control}
        name="content"
        render={({ fieldState ,field}) => (
          <Field className="flex w-full flex-col">
            <FieldLabel className="paragraph-semibold text-dark400_light800">
              Detailed explanation of your problem{" "}
              <span className="text-primary-500">*</span>
            </FieldLabel>

            {/* Replace with your editor component */}
            <Editor value={field.value} fieldChange={field.onChange} editorRef={editorRef} />

            <FieldDescription className="body-regular text-light-500 mt-2.5">
              Introduce the problem and expand on what you've put in the title.
            </FieldDescription>

            {fieldState.error && (
              <FieldError>{fieldState.error.message}</FieldError>
            )}
          </Field>
        )}
      />

      {/* TAGS */}
      <Controller
        control={form.control}
        name="tags"
        render={({ field, fieldState }) => (
          <Field className="flex w-full flex-col gap-3">
            <FieldLabel className="paragraph-semibold text-dark400_light800">
              Tags <span className="text-primary-500">*</span>
            </FieldLabel>

            <div className="flex flex-col">
              <Input
                className="rounded-1.5 paragraph-regular background-light800_dark300 light-border-2 text-dark300_light700 no-focus min-h-14 border"
                placeholder="Add tags..."
                value=""
                onChange={() => {}}
              />
              {/* Tags list goes here */}
              Tags
            </div>

            <FieldDescription className="body-regular text-light-500 mt-2.5">
              Add up to 3 tags to describe what your question is about. You need
              to press enter to add a tag.
            </FieldDescription>

            {fieldState.error && (
              <FieldError>{fieldState.error.message}</FieldError>
            )}
          </Field>
        )}
      />

      <div className="mt-16 flex justify-end">
        <Button
          type="submit"
          className="primary-gradient text-light-900 min-h-11.5 px-4 py-3"
        >
          Ask A Question
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
