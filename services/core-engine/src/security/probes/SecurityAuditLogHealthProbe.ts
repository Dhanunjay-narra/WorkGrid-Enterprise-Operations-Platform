export class SecurityAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityAuditLog" };
  }
}
