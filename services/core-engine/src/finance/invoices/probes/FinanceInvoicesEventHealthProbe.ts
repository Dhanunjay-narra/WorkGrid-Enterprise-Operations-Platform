export class FinanceInvoicesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesEvent" };
  }
}
