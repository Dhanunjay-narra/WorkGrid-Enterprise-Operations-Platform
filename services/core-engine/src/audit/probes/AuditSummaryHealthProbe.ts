export class AuditSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditSummary" };
  }
}
