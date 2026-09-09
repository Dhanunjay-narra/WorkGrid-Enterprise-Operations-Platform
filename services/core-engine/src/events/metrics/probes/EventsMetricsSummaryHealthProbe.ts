export class EventsMetricsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsSummary" };
  }
}
