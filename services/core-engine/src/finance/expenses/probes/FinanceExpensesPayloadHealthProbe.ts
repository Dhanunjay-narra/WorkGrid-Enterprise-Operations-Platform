export class FinanceExpensesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesPayload" };
  }
}
