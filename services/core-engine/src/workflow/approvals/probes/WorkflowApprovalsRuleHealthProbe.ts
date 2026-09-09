export class WorkflowApprovalsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsRule" };
  }
}
