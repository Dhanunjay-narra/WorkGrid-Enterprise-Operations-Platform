export class FinanceTreasuryTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryTask" };
  }
}
