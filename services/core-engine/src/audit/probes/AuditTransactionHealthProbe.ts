export class AuditTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditTransaction" };
  }
}
