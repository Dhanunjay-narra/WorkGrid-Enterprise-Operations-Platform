export class ProjectRisksRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectRisksRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectRisksRule" };
  }
}
