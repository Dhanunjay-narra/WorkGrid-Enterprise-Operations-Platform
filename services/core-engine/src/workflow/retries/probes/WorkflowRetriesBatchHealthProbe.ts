export class WorkflowRetriesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesBatch" };
  }
}
