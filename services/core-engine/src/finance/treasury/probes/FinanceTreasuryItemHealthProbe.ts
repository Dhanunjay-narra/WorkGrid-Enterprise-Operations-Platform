export class FinanceTreasuryItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryItem" };
  }
}
