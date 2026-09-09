export class AuthAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthAuditLog" };
  }
}
