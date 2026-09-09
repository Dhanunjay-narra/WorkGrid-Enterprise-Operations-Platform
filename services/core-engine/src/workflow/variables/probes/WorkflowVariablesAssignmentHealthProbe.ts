export class WorkflowVariablesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesAssignment" };
  }
}
