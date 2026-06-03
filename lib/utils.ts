import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "5511940638951";
export const WHATSAPP_DISPLAY = "(11) 94063-8951";

export const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/JofGqypsCbRHNJHdL7qlEm";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá Trend Studio, quero garantir meu bilhete da rifa do GOL GLI 1995.";

export function buildWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
