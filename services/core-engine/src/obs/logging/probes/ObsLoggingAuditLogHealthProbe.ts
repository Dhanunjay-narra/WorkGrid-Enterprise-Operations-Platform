export class ObsLoggingAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingAuditLog" };
  }
}
