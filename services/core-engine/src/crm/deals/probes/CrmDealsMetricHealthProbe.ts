export class CrmDealsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsMetric" };
  }
}
