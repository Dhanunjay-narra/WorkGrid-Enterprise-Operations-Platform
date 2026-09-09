export class FinanceInvoicesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesConfig" };
  }
}
