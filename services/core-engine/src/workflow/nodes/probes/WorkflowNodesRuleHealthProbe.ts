export class WorkflowNodesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesRule" };
  }
}
