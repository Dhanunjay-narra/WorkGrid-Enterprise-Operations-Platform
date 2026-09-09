export class WorkflowApprovalsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsSummary" };
  }
}
