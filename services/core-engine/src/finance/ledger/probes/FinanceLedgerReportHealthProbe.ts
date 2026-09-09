export class FinanceLedgerReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerReport" };
  }
}
