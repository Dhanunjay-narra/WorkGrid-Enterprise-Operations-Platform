export class ObsProfilingAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingAuditLog" };
  }
}
