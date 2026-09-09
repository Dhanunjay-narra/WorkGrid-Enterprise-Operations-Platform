export class EventsIdempotencySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencySession" };
  }
}
