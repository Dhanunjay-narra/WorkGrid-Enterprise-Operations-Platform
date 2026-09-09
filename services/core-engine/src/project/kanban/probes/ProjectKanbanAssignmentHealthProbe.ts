export class ProjectKanbanAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanAssignment" };
  }
}
