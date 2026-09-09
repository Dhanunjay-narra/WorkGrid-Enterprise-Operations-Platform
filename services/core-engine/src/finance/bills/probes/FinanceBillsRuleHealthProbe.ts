export class FinanceBillsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsRule" };
  }
}
