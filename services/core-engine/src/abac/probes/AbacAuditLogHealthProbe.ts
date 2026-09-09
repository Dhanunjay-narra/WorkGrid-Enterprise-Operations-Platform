export class AbacAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacAuditLog" };
  }
}
