export class FinanceBankingRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingRule" };
  }
}
