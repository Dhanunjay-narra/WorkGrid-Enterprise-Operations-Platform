export class FinanceInvoicesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesRecord" };
  }
}
