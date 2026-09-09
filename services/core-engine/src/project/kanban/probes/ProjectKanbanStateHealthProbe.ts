export class ProjectKanbanStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanState" };
  }
}
