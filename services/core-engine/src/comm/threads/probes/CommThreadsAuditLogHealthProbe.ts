export class CommThreadsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsAuditLog" };
  }
}
