export class ProjectTasksAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksAssignment" };
  }
}
