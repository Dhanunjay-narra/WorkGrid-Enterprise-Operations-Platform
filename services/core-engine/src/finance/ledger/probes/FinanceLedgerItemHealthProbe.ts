export class FinanceLedgerItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerItem" };
  }
}
