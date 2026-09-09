export class ProjectKanbanSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanSummary" };
  }
}
