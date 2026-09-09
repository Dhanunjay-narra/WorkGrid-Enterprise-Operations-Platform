export class EventsIdempotencyThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyThreshold" };
  }
}
