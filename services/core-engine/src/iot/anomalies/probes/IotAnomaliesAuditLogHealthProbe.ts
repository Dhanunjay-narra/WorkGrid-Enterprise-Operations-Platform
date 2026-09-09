export class IotAnomaliesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesAuditLog" };
  }
}
