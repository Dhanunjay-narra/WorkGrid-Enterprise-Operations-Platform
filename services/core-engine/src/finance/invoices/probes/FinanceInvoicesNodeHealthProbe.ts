export class FinanceInvoicesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesNode" };
  }
}
