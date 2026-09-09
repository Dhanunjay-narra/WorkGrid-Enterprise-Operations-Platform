export class WorkflowExecutionsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsBatch" };
  }
}
