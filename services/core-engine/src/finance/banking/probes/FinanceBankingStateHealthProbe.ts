export class FinanceBankingStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingState" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingState" };
  }
}
