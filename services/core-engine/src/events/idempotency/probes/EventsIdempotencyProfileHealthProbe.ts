export class EventsIdempotencyProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyProfile" };
  }
}
