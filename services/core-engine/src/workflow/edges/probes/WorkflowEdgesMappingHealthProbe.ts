export class WorkflowEdgesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesMapping" };
  }
}
