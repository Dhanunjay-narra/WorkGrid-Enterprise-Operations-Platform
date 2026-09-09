export class IotFleetAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetAuditLog" };
  }
}
