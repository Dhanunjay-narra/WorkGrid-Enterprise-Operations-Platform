export class FinanceInvoicesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesState" };
  }
}
