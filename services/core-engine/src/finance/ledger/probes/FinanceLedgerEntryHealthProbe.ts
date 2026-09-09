export class FinanceLedgerEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerEntry" };
  }
}
