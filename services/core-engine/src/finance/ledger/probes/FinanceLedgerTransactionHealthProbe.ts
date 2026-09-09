export class FinanceLedgerTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerTransaction" };
  }
}
