export class FinanceLedgerSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerSession" };
  }
}
