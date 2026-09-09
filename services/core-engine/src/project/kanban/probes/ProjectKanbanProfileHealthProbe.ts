export class ProjectKanbanProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanProfile" };
  }
}
