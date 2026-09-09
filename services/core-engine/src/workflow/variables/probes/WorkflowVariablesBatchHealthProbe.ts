export class WorkflowVariablesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesBatch" };
  }
}
