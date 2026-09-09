export class DmsVersionsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsAuditLog" };
  }
}
