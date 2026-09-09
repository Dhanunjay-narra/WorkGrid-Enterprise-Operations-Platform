export class ProjectTasksReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksReport" };
  }
}
