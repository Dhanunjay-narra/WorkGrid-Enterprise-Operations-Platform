export class FinanceLedgerEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerEvent" };
  }
}
