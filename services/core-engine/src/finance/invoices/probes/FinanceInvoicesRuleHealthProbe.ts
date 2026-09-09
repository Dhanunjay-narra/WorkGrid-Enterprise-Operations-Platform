export class FinanceInvoicesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesRule" };
  }
}
