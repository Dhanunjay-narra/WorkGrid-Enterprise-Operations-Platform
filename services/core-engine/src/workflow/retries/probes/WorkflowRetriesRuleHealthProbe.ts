export class WorkflowRetriesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesRule" };
  }
}
