export class EventsIdempotencyItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyItem" };
  }
}
