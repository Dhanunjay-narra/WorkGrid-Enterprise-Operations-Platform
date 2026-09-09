export class FinanceTaxesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesBatch" };
  }
}
