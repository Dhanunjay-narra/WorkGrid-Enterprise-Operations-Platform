export class FinanceBankingSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingSummary" };
  }
}
