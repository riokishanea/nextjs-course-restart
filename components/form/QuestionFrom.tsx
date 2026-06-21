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
import { z } from "zod";
import TagCard from "../cards/TagCard";

type QuestionFormValues = z.infer<typeof AskQuestionSchema>;

const Editor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

const QuestionForm = () => {
  const editorRef = useRef<MDXEditorMethods>(null);

  const form = useForm<QuestionFormValues>({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: { value: string[] }
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tagInput = e.currentTarget.value.trim().toLowerCase();

      if (tagInput && tagInput.length < 15 && !field.value.includes(tagInput)) {
        form.setValue("tags", [...field.value, tagInput], {
          shouldValidate: true,
          shouldDirty: true,
        });
        e.currentTarget.value = "";
        form.clearErrors("tags");
      } else if (tagInput.length > 15) {
        form.setError("tags", {
          type: "manual",
          message: "Tag should be less than 15",
        });
      } else if (field.value.includes(tagInput)) {
        form.setError("tags", {
          type: "manual",
          message: "Tag already exists",
        });
      }
    }
  };

  const handleTagRemove = (tag: string, field: { value: string[] }) => {
    const newTag = field.value.filter((t) => t !== tag);

    form.setValue("tags", newTag);
    
    if(newTag.length === 0){
      form.setError('tags', {
        type: "manual",
        message: "Tags are required"
      })
    }
  };

  const handleCreateQuestion = (data: QuestionFormValues) => {
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
        render={({ fieldState, field }) => (
          <Field className="flex w-full flex-col">
            <FieldLabel className="paragraph-semibold text-dark400_light800">
              Detailed explanation of your problem{" "}
              <span className="text-primary-500">*</span>
            </FieldLabel>

            {/* Replace with your editor component */}
            <Editor
              value={field.value}
              fieldChange={field.onChange}
              editorRef={editorRef}
            />

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
                onKeyDown={(e) => handleInputKeyDown(e, field)}
                onChange={() => {}}
              />
              {/* Tags list goes here */}
              {field.value.length > 0 && (
                <div className="flex-start mt-2 flex-wrap gap-2.5">
                  {field.value.map((tag: string) => (
                    <TagCard
                      key={tag}
                      _id={tag}
                      name={tag}
                      compact
                      remove
                      isButton
                      handleRemove={() => handleTagRemove(tag, field)}
                    />
                  ))}
                </div>
              )}
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
          Submit Question
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
