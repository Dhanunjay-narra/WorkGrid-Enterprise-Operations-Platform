export class ProjectKanbanTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanTask" };
  }
}
