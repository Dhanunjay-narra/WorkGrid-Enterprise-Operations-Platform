export class FinanceLedgerTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerTask" };
  }
}
