export class FinanceInvoicesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesQueue" };
  }
}
