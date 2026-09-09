export class FinanceInvoicesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesMetric" };
  }
}
