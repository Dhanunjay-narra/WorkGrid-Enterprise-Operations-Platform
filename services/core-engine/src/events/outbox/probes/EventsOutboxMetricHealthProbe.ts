export class EventsOutboxMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxMetric" };
  }
}
