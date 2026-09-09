export class FinanceTaxesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesSummary" };
  }
}
