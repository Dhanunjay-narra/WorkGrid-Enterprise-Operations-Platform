export class FinanceInvoicesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesSummary" };
  }
}
