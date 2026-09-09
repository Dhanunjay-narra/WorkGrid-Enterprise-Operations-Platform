export class IotDevicesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesAuditLog" };
  }
}
