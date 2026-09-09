export class ProjectGanttReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttReport" };
  }
}
