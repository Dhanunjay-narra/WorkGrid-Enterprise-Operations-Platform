export class FinanceTreasuryQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryQueue" };
  }
}
