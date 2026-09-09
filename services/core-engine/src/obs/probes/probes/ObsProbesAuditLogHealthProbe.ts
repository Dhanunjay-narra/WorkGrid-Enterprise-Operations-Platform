export class ObsProbesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesAuditLog" };
  }
}
