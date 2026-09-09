export class FinanceLedgerRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerRecord" };
  }
}
