import ROUTES from "@/constants/routes";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";

interface Props {
  _id: string;
  name: string;
  question: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ _id, name, question, showCount, compact }: Props) => {
  const iconClass = getDeviconClassName(name) 
  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2 items-center">
      <Badge className="background-light800_dark300 text-light400_light500 rounded border-none px-4 py-4 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass}`}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{question}</p>
      )}
    </Link>
  );
};

export default TagCard;
