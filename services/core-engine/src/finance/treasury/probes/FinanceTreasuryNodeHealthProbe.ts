export class FinanceTreasuryNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryNode" };
  }
}
