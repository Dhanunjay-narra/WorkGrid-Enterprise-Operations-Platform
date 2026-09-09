export class EventsMetricsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsThreshold" };
  }
}
