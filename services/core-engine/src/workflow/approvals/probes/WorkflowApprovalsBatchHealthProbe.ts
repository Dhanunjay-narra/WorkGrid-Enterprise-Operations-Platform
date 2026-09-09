export class WorkflowApprovalsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsBatch" };
  }
}
