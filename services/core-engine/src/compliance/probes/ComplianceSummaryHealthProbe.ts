export class ComplianceSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceSummary" };
  }
}
