export class FinanceLedgerAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerAuditLog" };
  }
}
