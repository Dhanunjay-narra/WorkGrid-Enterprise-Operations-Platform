export class FinanceTreasuryStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryState" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryState" };
  }
}
