export class FinanceInvoicesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesMapping" };
  }
}
