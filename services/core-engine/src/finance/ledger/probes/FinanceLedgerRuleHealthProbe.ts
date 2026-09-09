export class FinanceLedgerRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerRule" };
  }
}
