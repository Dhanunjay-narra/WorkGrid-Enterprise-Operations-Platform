export class FinanceLedgerNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerNode" };
  }
}
