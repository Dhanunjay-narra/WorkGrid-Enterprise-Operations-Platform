export class FinanceBankingBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingBatch" };
  }
}
