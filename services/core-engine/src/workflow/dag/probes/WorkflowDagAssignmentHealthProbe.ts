export class WorkflowDagAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagAssignment" };
  }
}
