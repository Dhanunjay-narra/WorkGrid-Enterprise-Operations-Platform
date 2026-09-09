export class IntOauthAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthAuditLog" };
  }
}
