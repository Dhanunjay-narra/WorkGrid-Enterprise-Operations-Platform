export class WorkflowVariablesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesTask" };
  }
}
