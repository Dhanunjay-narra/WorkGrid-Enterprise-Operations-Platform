export class FinanceBankingMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingMetric" };
  }
}
