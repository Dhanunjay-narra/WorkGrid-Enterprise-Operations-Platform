export class FinanceTaxesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesRule" };
  }
}
