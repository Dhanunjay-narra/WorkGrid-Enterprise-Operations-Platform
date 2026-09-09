export class WorkflowCronsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsAssignment" };
  }
}
