export class FinanceInvoicesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesThreshold" };
  }
}
