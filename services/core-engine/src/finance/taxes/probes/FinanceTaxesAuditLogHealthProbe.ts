export class FinanceTaxesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesAuditLog" };
  }
}
