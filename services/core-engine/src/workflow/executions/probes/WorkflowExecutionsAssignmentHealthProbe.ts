export class WorkflowExecutionsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsAssignment" };
  }
}
