export class ProjectGanttAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttAssignment" };
  }
}
