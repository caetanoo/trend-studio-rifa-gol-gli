import { META_API_VERSION, META_PIXEL_ID } from "@/lib/meta";

export type MetaConversionInput = {
  eventName: string;
  eventId: string;
  eventSourceUrl: string;
  userAgent?: string;
  clientIpAddress?: string;
  fbp?: string;
  fbc?: string;
};

type MetaEventsResponse = {
  events_received?: number;
  messages?: string[];
  fbtrace_id?: string;
};

export async function sendMetaConversion(
  input: MetaConversionInput
): Promise<MetaEventsResponse> {
  const accessToken = process.env.META_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error("META_ACCESS_TOKEN is not configured");
  }

  const testEventCode = process.env.META_TEST_EVENT_CODE;
  const url = new URL(
    `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events`
  );
  url.searchParams.set("access_token", accessToken);

  const userData: Record<string, string> = {};
  if (input.clientIpAddress) {
    userData.client_ip_address = input.clientIpAddress;
  }
  if (input.userAgent) {
    userData.client_user_agent = input.userAgent;
  }
  if (input.fbp) {
    userData.fbp = input.fbp;
  }
  if (input.fbc) {
    userData.fbc = input.fbc;
  }

  const body: Record<string, unknown> = {
    data: [
      {
        event_name: input.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: input.eventId,
        action_source: "website",
        event_source_url: input.eventSourceUrl,
        user_data: userData,
      },
    ],
  };

  if (testEventCode) {
    body.test_event_code = testEventCode;
  }

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const payload = (await response.json()) as MetaEventsResponse & {
    error?: { message?: string };
  };

  if (!response.ok) {
    throw new Error(
      payload.error?.message ?? `Meta Conversions API failed (${response.status})`
    );
  }

  return payload;
}
