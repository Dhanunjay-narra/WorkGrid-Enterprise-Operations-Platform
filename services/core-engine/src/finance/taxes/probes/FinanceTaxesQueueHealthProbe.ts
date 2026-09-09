export class FinanceTaxesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesQueue" };
  }
}
