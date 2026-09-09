export class FinanceTreasuryBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryBatch" };
  }
}
