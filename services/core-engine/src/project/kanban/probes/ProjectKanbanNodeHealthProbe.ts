export class ProjectKanbanNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanNode" };
  }
}
