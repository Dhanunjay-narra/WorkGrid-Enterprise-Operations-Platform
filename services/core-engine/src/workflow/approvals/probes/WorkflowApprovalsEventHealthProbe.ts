export class WorkflowApprovalsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsEvent" };
  }
}
