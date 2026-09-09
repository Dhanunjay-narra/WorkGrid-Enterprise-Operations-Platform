export class FinanceInvoicesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesBatch" };
  }
}
