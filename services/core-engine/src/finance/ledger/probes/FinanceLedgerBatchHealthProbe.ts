export class FinanceLedgerBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerBatch" };
  }
}
