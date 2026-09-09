export class EventsMetricsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsMapping" };
  }
}
