export class ObsAlertsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsAuditLog" };
  }
}
