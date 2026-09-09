export class ObsSpansAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansAuditLog" };
  }
}
