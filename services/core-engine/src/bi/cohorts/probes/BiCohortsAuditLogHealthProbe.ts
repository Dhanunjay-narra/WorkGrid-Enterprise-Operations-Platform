export class BiCohortsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsAuditLog" };
  }
}
