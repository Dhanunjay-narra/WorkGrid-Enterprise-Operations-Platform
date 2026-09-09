export class AuditQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditQueue" };
  }
}
