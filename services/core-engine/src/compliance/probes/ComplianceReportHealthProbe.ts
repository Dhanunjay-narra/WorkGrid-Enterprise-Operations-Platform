export class ComplianceReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceReport" };
  }
}
