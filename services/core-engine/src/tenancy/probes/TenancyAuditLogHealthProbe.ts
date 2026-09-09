export class TenancyAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyAuditLog" };
  }
}
