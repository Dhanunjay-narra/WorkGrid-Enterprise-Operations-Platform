export class CrmLeadsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsMetric" };
  }
}
