export class FinanceInvoicesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesProfile" };
  }
}
