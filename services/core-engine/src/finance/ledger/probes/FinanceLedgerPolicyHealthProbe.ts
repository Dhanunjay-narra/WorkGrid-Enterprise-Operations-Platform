export class FinanceLedgerPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerPolicy" };
  }
}
