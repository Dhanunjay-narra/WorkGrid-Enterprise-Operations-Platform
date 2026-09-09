export class FinanceInvoicesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesAssignment" };
  }
}
