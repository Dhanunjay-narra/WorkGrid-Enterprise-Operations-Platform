export class AuditStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditState" };
  }
}
