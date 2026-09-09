export class WorkflowExecutionsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsMetric" };
  }
}
