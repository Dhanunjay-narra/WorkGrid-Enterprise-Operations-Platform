export class ProjectKanbanScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanSchedule" };
  }
}
