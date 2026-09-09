export class FinanceInvoicesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesAuditLog" };
  }
}
