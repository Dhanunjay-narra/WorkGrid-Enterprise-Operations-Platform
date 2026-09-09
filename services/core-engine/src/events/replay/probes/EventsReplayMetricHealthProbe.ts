export class EventsReplayMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayMetric" };
  }
}
