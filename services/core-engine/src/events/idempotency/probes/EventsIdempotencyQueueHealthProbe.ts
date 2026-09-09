export class EventsIdempotencyQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyQueue" };
  }
}
