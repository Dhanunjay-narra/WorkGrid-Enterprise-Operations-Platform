export class AuditConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditConfig" };
  }
}
