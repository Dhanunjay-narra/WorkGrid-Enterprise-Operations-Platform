export class FinanceBillsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsMetric" };
  }
}
