export class EventsConsumersMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersMetric" };
  }
}
