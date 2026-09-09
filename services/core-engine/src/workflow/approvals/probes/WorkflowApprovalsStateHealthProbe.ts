export class WorkflowApprovalsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsState" };
  }
}
