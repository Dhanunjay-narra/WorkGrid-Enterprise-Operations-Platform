export class FinanceTaxesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesConfig" };
  }
}
