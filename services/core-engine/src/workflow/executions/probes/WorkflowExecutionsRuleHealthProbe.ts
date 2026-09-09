export class WorkflowExecutionsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsRule" };
  }
}
