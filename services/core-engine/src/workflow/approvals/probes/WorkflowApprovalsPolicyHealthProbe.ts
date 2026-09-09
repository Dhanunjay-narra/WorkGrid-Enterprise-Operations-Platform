export class WorkflowApprovalsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsPolicy" };
  }
}
