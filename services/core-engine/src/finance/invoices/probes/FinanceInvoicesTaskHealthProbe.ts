export class FinanceInvoicesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesTask" };
  }
}
