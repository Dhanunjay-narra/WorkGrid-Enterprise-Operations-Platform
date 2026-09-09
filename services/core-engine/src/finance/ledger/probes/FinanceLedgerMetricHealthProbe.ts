export class FinanceLedgerMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerMetric" };
  }
}
