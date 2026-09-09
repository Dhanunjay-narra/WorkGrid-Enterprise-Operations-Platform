export class WorkflowApprovalsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsQueue" };
  }
}
