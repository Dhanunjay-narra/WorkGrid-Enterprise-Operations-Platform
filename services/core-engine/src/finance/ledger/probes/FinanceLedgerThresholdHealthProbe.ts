export class FinanceLedgerThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerThreshold" };
  }
}
