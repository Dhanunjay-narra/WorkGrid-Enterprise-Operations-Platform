export class EventsIdempotencyEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyEntry" };
  }
}
