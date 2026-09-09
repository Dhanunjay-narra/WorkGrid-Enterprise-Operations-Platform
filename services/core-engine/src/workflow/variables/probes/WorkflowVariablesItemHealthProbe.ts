export class WorkflowVariablesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesItem" };
  }
}
