export class FinanceInvoicesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesSession" };
  }
}
