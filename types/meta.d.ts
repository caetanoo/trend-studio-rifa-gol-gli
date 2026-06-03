type FbqCommand = "init" | "track" | "trackCustom";

interface Fbq {
  (command: "init", pixelId: string): void;
  (
    command: "track",
    eventName: string,
    params?: Record<string, unknown>,
    options?: { eventID?: string }
  ): void;
  (
    command: "trackCustom",
    eventName: string,
    params?: Record<string, unknown>,
    options?: { eventID?: string }
  ): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: Fbq;
}

interface Window {
  fbq?: Fbq;
  _fbq?: Fbq;
}
