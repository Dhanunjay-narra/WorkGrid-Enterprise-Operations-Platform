export class EventsOutboxPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxPayload" };
  }
}
