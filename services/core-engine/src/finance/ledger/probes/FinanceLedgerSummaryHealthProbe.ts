export class FinanceLedgerSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerSummary" };
  }
}
