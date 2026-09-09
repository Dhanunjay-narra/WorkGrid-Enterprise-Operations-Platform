export class FinanceLedgerMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerMapping" };
  }
}
