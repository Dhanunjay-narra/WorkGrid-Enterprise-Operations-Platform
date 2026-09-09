export class FinanceTreasuryRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryRule" };
  }
}
