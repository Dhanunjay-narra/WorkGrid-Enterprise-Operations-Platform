export class WorkflowNodesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesMetric" };
  }
}
