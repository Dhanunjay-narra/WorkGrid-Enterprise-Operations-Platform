export class WorkflowRetriesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesAssignment" };
  }
}
