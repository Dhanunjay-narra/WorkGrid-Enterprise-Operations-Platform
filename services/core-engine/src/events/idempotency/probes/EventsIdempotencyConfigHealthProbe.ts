export class EventsIdempotencyConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyConfig" };
  }
}
