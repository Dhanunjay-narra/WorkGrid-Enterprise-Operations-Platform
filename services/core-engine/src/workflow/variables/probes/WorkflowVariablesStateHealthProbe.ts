export class WorkflowVariablesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesState" };
  }
}
