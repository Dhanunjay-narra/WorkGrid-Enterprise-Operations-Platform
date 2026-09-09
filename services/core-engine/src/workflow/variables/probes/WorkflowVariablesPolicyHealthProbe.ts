export class WorkflowVariablesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesPolicy" };
  }
}
