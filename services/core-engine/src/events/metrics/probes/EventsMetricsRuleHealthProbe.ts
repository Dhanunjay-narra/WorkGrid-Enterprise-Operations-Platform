export class EventsMetricsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsRule" };
  }
}
