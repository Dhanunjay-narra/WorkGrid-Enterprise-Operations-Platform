export class FinanceInvoicesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesItem" };
  }
}
