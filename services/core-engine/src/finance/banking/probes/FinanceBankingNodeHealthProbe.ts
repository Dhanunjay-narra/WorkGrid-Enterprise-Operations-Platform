export class FinanceBankingNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingNode" };
  }
}
