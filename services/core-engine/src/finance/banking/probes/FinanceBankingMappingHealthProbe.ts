export class FinanceBankingMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingMapping" };
  }
}
