export class ProjectRisksSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectRisksSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectRisksSummary" };
  }
}
