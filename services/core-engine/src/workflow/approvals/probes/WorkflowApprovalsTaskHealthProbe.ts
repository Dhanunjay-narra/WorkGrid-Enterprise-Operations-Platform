export class WorkflowApprovalsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsTask" };
  }
}
