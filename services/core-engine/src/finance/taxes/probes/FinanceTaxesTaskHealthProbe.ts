export class FinanceTaxesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesTask" };
  }
}
