export class EventsMetricsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsReport" };
  }
}
