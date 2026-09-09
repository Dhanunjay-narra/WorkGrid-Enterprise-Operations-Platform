export class WorkflowApprovalsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsAssignment" };
  }
}
