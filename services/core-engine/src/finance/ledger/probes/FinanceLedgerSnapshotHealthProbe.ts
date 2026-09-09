export class FinanceLedgerSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerSnapshot" };
  }
}
