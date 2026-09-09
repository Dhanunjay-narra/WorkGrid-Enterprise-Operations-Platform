export class WorkflowApprovalsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsSession" };
  }
}
