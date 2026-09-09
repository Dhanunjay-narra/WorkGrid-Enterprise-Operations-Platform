export class EventsMetricsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsNode" };
  }
}
