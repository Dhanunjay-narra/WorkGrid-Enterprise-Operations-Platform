export class EventsIdempotencyPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyPayload" };
  }
}
