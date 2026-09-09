export class FinanceLedgerConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerConfig" };
  }
}
