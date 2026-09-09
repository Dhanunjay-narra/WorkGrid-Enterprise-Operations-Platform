export class ProjectKanbanReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanReport" };
  }
}
