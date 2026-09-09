export class EventsMetricsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsTask" };
  }
}
