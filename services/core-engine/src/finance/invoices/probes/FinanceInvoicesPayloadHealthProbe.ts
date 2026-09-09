export class FinanceInvoicesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesPayload" };
  }
}
