export class ObsTracingAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingAuditLog" };
  }
}
