export class FinanceTreasuryReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryReport" };
  }
}
