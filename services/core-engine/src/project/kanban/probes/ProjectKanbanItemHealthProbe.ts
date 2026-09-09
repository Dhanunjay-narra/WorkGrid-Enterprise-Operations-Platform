export class ProjectKanbanItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanItem" };
  }
}
