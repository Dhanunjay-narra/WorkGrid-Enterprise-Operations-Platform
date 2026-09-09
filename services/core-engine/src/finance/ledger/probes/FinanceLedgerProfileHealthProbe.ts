export class FinanceLedgerProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerProfile" };
  }
}
