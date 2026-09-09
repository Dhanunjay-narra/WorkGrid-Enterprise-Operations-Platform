export class AuditAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditAuditLog" };
  }
}
