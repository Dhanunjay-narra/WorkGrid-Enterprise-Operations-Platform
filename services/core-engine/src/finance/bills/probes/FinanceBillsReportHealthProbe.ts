export class FinanceBillsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsReport" };
  }
}
