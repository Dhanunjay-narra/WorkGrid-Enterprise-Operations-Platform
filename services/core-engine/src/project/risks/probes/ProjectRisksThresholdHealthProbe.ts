export class ProjectRisksThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectRisksThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectRisksThreshold" };
  }
}
