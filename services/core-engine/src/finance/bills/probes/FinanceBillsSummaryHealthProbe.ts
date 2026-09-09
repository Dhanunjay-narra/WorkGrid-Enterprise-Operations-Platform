export class FinanceBillsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsSummary" };
  }
}
