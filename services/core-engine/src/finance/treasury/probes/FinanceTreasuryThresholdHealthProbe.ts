export class FinanceTreasuryThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryThreshold" };
  }
}
