export class IotThresholdsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsAuditLog" };
  }
}
