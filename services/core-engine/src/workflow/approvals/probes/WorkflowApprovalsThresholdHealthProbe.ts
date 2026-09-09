export class WorkflowApprovalsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsThreshold" };
  }
}
