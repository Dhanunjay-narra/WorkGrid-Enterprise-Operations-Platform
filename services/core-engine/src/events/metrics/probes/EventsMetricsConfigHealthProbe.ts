export class EventsMetricsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsConfig" };
  }
}
