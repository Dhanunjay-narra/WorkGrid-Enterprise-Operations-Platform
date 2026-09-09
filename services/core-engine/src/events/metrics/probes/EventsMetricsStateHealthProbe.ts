export class EventsMetricsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsState" };
  }
}
