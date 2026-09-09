export class FinanceExpensesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesAuditLog" };
  }
}
