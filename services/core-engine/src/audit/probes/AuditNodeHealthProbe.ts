export class AuditNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditNode" };
  }
}
