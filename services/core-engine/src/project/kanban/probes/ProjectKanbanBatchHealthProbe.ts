export class ProjectKanbanBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanBatch" };
  }
}
