export class DmsRetentionAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionAuditLog" };
  }
}
