export class FinanceInvoicesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesEntry" };
  }
}
