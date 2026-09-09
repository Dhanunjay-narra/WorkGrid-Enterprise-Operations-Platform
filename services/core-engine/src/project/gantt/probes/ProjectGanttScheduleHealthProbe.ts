export class ProjectGanttScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttSchedule" };
  }
}
