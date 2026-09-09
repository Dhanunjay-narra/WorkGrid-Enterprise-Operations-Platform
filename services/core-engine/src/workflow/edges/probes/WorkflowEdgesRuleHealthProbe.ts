export class WorkflowEdgesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesRule" };
  }
}
