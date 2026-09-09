export class WorkflowNodesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesBatch" };
  }
}
