export class FinanceTaxesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesNode" };
  }
}
