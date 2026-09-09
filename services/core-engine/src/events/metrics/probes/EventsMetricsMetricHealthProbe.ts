export class EventsMetricsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsMetric" };
  }
}
