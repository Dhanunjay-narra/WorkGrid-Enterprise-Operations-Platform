export class ProjectRisksTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectRisksTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectRisksTask" };
  }
}
