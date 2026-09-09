export class FinanceTreasuryMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryMetric" };
  }
}
