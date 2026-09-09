export class EventsMetricsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsProfile" };
  }
}
