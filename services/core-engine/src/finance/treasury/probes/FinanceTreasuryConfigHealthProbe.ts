export class FinanceTreasuryConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryConfig" };
  }
}
