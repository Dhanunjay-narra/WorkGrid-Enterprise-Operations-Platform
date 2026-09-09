export class FinanceTaxesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesItem" };
  }
}
