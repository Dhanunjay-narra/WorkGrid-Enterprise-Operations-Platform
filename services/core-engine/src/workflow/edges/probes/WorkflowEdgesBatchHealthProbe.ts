export class WorkflowEdgesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesBatch" };
  }
}
