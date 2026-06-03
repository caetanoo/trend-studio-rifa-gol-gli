"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_GROUP_URL } from "@/lib/utils";

function getCookie(name: string): string | undefined {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

function trackLeadConversion() {
  const eventId = crypto.randomUUID();

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", {}, { eventID: eventId });
  }

  const payload = JSON.stringify({
    eventName: "Lead",
    eventId,
    eventSourceUrl: window.location.href,
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/meta/conversion",
      new Blob([payload], { type: "application/json" })
    );
    return;
  }

  void fetch("/api/meta/conversion", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  });
}

export function WhatsAppCta() {
  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackLeadConversion}
      className="mt-8 inline-flex h-16 w-full items-center justify-center gap-3 rounded-md bg-accent px-6 text-lg font-bold text-white shadow-[0_8px_40px_-12px_rgba(225,6,0,0.7)] transition-colors hover:bg-accent-hover active:scale-[0.98]"
    >
      <MessageCircle className="h-5 w-5" />
      Entrar no grupo →
    </a>
  );
}
