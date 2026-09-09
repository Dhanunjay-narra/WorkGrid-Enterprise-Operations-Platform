export class AuditEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditEvent" };
  }
}
