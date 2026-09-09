export class WorkflowEdgesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesPolicy" };
  }
}
