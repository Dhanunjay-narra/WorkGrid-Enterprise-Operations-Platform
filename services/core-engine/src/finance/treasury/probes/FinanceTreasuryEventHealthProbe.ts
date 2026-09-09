export class FinanceTreasuryEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryEvent" };
  }
}
