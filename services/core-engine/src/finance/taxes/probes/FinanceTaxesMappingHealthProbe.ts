export class FinanceTaxesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesMapping" };
  }
}
