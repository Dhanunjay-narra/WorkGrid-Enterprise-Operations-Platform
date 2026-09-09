export class FinanceInvoicesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesReport" };
  }
}
