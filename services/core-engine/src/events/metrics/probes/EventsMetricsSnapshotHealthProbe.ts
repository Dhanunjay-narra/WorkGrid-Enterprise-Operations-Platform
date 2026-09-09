export class EventsMetricsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsSnapshot" };
  }
}
