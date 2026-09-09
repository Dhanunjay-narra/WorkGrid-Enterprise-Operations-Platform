export class FinanceBillsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsMapping" };
  }
}
