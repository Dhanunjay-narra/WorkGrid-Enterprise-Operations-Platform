export class AuditItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditItem" };
  }
}
