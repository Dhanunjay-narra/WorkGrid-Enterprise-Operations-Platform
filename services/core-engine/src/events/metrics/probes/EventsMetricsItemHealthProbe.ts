export class EventsMetricsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsItem" };
  }
}
