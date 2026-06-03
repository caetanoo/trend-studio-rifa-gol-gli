import { NextRequest, NextResponse } from "next/server";
import { sendMetaConversion } from "@/lib/meta-conversions";

type ConversionBody = {
  eventName?: string;
  eventId?: string;
  eventSourceUrl?: string;
  fbp?: string;
  fbc?: string;
};

function getClientIp(request: NextRequest): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim();
  }
  return request.headers.get("x-real-ip") ?? undefined;
}

export async function POST(request: NextRequest) {
  if (!process.env.META_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: "META_ACCESS_TOKEN is not configured" },
      { status: 503 }
    );
  }

  let body: ConversionBody;
  try {
    body = (await request.json()) as ConversionBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { eventName, eventId, eventSourceUrl, fbp, fbc } = body;

  if (!eventName || !eventId || !eventSourceUrl) {
    return NextResponse.json(
      { error: "eventName, eventId, and eventSourceUrl are required" },
      { status: 400 }
    );
  }

  try {
    const result = await sendMetaConversion({
      eventName,
      eventId,
      eventSourceUrl,
      fbp,
      fbc,
      userAgent: request.headers.get("user-agent") ?? undefined,
      clientIpAddress: getClientIp(request),
    });

    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send conversion";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
