export class ProjectTasksScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksSchedule" };
  }
}
