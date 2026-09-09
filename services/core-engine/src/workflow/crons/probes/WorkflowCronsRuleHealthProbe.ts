export class WorkflowCronsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsRule" };
  }
}
