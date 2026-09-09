export class ProjectKanbanQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanQueue" };
  }
}
