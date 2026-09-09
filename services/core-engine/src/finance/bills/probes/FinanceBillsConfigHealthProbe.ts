export class FinanceBillsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsConfig" };
  }
}
