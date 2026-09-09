export class FinanceBankingQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingQueue" };
  }
}
