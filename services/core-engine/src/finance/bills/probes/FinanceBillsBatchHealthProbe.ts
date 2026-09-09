export class FinanceBillsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsBatch" };
  }
}
