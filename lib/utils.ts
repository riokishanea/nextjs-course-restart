import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechname = techName.replace(/[ .]/g, "").toLowerCase();
  return techMap[normalizedTechname]
    ? `${techMap[normalizedTechname]} colored`
    : "devicon-plain";
};

export const getTimeStamp = (date: Date): string => {
  const diff = (Date.now() - date.getTime()) / 1000; // difference in seconds

  if (diff < 5) {
    return "just now";
  }

  if (diff < 60) {
    const seconds = Math.floor(diff);
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }

  if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }

  if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }

  if (diff < 2592000) {
    // ~30 days
    const days = Math.floor(diff / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  if (diff < 31536000) {
    // ~12 months
    const months = Math.floor(diff / 2592000);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(diff / 31536000);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
};
