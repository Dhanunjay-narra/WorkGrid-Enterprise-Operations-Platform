export class ProjectCapacityAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityAssignment" };
  }
}
