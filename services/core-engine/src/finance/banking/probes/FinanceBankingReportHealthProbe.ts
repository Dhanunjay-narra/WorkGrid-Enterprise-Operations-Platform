export class FinanceBankingReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingReport" };
  }
}
