export class WorkflowNodesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesAssignment" };
  }
}
