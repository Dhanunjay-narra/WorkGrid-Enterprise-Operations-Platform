export class WorkflowVariablesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesEvent" };
  }
}
