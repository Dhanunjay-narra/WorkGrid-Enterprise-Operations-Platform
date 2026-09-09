export class AuditReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditReport" };
  }
}
