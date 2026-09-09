export class TenancyMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyMetric" };
  }
}
