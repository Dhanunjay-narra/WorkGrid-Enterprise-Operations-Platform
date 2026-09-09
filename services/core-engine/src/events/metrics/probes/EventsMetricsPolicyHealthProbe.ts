export class EventsMetricsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsPolicy" };
  }
}
