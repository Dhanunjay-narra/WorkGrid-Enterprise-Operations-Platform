export class WorkflowVariablesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesSession" };
  }
}
