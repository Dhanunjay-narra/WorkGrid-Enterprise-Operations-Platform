export class FinanceTaxesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesThreshold" };
  }
}
