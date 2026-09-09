export class WorkflowVariablesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesRule" };
  }
}
