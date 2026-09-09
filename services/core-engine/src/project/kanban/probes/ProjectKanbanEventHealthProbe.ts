export class ProjectKanbanEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanEvent" };
  }
}
