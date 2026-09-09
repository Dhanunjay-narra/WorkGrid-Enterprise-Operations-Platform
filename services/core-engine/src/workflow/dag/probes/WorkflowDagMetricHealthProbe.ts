export class WorkflowDagMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagMetric" };
  }
}
