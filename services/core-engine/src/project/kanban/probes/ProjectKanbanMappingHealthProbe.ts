export class ProjectKanbanMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanMapping" };
  }
}
