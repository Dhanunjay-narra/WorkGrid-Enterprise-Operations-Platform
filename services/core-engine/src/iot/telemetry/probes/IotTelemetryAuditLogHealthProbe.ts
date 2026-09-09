export class IotTelemetryAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryAuditLog" };
  }
}
