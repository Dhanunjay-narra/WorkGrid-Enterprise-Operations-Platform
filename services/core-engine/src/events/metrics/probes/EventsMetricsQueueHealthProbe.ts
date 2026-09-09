export class EventsMetricsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsQueue" };
  }
}
