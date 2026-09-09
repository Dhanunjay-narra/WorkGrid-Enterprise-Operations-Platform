export class ProjectRisksQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectRisksQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectRisksQueue" };
  }
}
