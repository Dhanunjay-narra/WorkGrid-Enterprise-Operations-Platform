export class FinanceInvoicesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesPolicy" };
  }
}
