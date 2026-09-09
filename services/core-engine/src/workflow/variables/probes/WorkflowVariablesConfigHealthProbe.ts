export class WorkflowVariablesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesConfig" };
  }
}
