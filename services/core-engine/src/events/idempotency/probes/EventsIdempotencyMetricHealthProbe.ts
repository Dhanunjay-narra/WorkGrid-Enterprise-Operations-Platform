export class EventsIdempotencyMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencyMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencyMetric" };
  }
}
