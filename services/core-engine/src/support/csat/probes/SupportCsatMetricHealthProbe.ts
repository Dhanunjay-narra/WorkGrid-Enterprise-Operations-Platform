export class SupportCsatMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatMetric" };
  }
}
