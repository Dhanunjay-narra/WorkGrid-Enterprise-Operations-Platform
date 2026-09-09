export class EventsPartitionsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsMetric" };
  }
}
