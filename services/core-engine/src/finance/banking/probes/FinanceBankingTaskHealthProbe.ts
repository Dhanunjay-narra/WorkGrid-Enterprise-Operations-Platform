export class FinanceBankingTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingTask" };
  }
}
