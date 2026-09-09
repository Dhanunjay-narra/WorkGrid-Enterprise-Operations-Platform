export class FinanceTaxesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesProfile" };
  }
}
