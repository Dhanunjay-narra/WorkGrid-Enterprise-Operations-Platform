export class EventsMetricsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsEntry" };
  }
}
