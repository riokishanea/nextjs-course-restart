import ROUTES from "@/constants/routes";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { cn, getDeviconClassName } from "@/lib/utils";
import Image from "next/image";

interface Props {
  _id: string;
  name: string;
  question?: number;
  showCount?: boolean;
  compact?: boolean;
  hideIcon?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagCard = ({
  _id,
  name,
  question,
  showCount,
  hideIcon,
  compact,
  remove,
  isButton,
  handleRemove,
}: Props) => {
  const iconClass = getDeviconClassName(name);

  const handleClick = (e: React.MouseEvent)=> {
    e.preventDefault()
  }

  const Content = (
    <>
      <Badge className="background-light800_dark300 text-light400_light500 rounded border-none px-4 py-4 uppercase flex flex-row gap-2">
        <div className="flex-center space-x-2">
          <i className={cn(!hideIcon ? `${iconClass}` : "hidden")} />
          <span>{name}</span>
        </div>
        {remove && (
          <Image
            src='/icons/close.svg'
            width={12}
            height={12}
            alt="close icon"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{question}</p>
      )}
    </>
  );

  if (compact) {
    return isButton ? (
      <button onClick={handleClick} className="flex- justify-between gap-2">{Content}</button>
    ) : (
      <Link
        href={ROUTES.TAGS(_id)}
        className="flex items-center justify-between gap-2"
      >
        {Content}
      </Link>
    );
  }
};

export default TagCard;
