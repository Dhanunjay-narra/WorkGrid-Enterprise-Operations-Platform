export class FinanceBankingConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingConfig" };
  }
}
