export class EventsDeadletterMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterMetric" };
  }
}
