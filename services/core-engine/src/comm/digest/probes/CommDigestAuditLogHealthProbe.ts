export class CommDigestAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestAuditLog" };
  }
}
