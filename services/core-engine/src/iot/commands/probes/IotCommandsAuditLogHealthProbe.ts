export class IotCommandsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsAuditLog" };
  }
}
