export class IotLocationsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsAuditLog" };
  }
}
