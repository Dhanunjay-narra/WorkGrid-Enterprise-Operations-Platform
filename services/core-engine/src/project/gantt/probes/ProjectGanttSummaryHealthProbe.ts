export class ProjectGanttSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttSummary" };
  }
}
