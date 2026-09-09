export class EventsIdempotencyEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyEvent" };
  }
}
