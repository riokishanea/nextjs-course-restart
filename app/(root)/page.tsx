import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
const questions = [
{
  _id: "1",
  title: "How to learn React?",
  description: "I want to learn React, can anyone help me?",
  tags: [
    { _id: "1", name: "React" },
    { _id: "2", name: "JavaScript" },
  ],
  author: { _id: "1", name: "John Doe" },
  upvotes: 10,
  answers: 5,
  views: 100,
  createdAt: new Date(),
},
{
  _id: "2",
  title: "How to learn JavaScript?",
  description: "I want to learn JavaScript, can anyone help me?",
  tags: [
    { _id: "1", name: "React" },
    { _id: "2", name: "JavaScript" },
  ],
  author: { _id: "1", name: "John Doe" },
  upvotes: 10,
  answers: 5,
  views: 100,
  createdAt: new Date(),
},
{
  _id: "3",
  title: "How to learn TypeScript?",
  description: "I want to learn TypeScript, can anyone help me?",
  tags: [
    { _id: "1", name: "React" },
    { _id: "2", name: "JavaScript" },
    { _id: "3", name: "TypeScript" },
  ],
  author: { _id: "1", name: "John Doe" },
  upvotes: 10,
  answers: 5,
  views: 100,
  createdAt: new Date(),
},
{
  _id: "4",
  title: "How to learn Next.js?",
  description: "I want to learn Next.js, can anyone help me?",
  tags: [
    { _id: "1", name: "TypeScript" },
    { _id: "2", name: "Next.js" },
  ],
  author: { _id: "1", name: "John Doe" },
  upvotes: 10,
  answers: 5,
  views: 100,
  createdAt: new Date(),
}
];  

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Home = async ({searchParams}: SearchParams) => {
  const rawQuery = (await searchParams).query;
  const query = (Array.isArray(rawQuery) ? rawQuery[0] : rawQuery) ?? "";

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <main>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient text-light-900 min-h-11.5 px-4 py-3">
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">

          <LocalSearch
            route="/"
            imgSrc="/icons/search.svg"
            placeholder="Search..."
            otherclasses="flex-1"
          />

      </section>
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question)=>(
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </main>
  );
};

export default Home;