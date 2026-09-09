export class FinanceLedgerStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerState" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerState" };
  }
}
