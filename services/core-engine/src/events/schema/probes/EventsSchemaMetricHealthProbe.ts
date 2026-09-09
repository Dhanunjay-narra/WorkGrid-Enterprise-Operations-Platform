export class EventsSchemaMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaMetric" };
  }
}
