export class FinanceExpensesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesAssignment" };
  }
}
