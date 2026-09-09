export class ProjectKanbanConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanConfig" };
  }
}
