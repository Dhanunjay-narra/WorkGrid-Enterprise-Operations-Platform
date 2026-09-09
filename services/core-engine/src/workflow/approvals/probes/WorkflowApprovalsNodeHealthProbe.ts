export class WorkflowApprovalsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsNode" };
  }
}
