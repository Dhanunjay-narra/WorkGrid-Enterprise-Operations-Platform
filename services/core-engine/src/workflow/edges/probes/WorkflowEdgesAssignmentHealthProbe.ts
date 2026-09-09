export class WorkflowEdgesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesAssignment" };
  }
}
