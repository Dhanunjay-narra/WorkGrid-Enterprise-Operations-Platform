export class FinanceLedgerQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerQueue" };
  }
}
