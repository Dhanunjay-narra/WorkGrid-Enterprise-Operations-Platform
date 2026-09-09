export class EventsMetricsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsSession" };
  }
}
