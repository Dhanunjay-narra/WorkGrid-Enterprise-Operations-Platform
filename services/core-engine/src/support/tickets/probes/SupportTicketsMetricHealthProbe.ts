export class SupportTicketsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsMetric" };
  }
}
