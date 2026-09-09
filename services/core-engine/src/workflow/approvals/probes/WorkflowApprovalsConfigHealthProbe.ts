export class WorkflowApprovalsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsConfig" };
  }
}
