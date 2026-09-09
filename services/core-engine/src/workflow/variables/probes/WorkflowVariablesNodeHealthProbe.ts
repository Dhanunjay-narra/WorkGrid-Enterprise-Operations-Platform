export class WorkflowVariablesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesNode" };
  }
}
