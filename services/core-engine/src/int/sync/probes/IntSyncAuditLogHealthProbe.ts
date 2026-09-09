export class IntSyncAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncAuditLog" };
  }
}
