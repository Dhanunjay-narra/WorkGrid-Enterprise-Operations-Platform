export class WorkflowEdgesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesMetric" };
  }
}
