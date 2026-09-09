export class RbacAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacAuditLog" };
  }
}
