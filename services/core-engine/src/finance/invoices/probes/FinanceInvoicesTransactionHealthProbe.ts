export class FinanceInvoicesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesTransaction" };
  }
}
