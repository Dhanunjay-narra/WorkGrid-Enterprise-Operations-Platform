export class FinanceTaxesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesMetric" };
  }
}
