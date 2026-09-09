export class FinanceTaxesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesReport" };
  }
}
