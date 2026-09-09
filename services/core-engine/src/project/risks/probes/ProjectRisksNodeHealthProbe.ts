export class ProjectRisksNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectRisksNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectRisksNode" };
  }
}
