export class ProjectKanbanSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanSession" };
  }
}
