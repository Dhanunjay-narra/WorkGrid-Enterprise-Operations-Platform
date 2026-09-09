export class WorkflowVariablesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesProfile" };
  }
}
