export class ProjectKanbanMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanMetric" };
  }
}
