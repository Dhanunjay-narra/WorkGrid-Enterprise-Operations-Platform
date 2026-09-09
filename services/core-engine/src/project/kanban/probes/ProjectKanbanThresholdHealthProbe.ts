export class ProjectKanbanThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanThreshold" };
  }
}
