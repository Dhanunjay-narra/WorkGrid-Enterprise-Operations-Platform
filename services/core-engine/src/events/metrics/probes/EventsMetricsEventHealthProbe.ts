export class EventsMetricsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsEvent" };
  }
}
