// components/RightSideBar.tsx
import Link from "next/link";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import TagCard from "../cards/TagCard";

export const hotQuestions = [
  { _id: 1, title: "What is the best way to learn React?" },
  { _id: 2, title: "How to manage state in React?" },
  { _id: 3, title: "What are React hooks?" },
  { _id: 4, title: "How to optimize React performance?" },
  { _id: 5, title: "What is the difference between React and Angular?" },
];

const popularTags = [
  { _id: "1", name: "javascript", question: 100 },
  { _id: "2", name: "react", question: 140 },
  { _id: "3", name: "nodejs", question: 80 },
  { _id: "4", name: "css", question: 60 },
  { _id: "5", name: "html", question: 50 },
];

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-87.5 flex-col overflow-y-auto border p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex flex-col gap-7.5">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.QUESTION(String(_id))}
              className="flex w-full items-start justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron"
                height={20}
                width={20}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, question }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              question={question}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
