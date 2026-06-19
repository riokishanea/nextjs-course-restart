import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyles?: string;
  imgStyle?: string;
  isAuthor?: boolean;
}

const Metrics = ({imgUrl, alt, value, title, href, textStyles, imgStyle, isAuthor}: Props) => {
  const metricsContent = (
    <>
        <Image src={imgUrl} width={16} height={16} alt={alt} className={`rounded-full object-contain ${imgStyle}`}/>
        <p className={`${textStyles} flex items-center gap-1`}>
            <span className={`${!isAuthor ? "font-bold" : ""}`}>{value}</span>
            <span className={`small-regular line-clamp-1 ${isAuthor? "max-sm:hidden": ""}`}>{title}</span>
        </p>
    </>
  )
    return href ? (
        <Link href={href} className="flex-center gap-1.5">{metricsContent}</Link>
  ) : (
    <div className="flex-center gap-1">{metricsContent}</div>
  )
}

export default Metrics
