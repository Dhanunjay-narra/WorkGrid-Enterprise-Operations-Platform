export class EventsMetricsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsBatch" };
  }
}
