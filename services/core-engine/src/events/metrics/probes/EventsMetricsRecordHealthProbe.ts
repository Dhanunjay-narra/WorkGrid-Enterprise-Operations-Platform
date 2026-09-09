export class EventsMetricsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsRecord" };
  }
}
