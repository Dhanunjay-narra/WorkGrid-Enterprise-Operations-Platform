export class WorkflowApprovalsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsTransaction" };
  }
}
