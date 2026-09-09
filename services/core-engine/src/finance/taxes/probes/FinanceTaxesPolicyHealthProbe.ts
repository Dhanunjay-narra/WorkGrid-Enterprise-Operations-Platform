export class FinanceTaxesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesPolicy" };
  }
}
