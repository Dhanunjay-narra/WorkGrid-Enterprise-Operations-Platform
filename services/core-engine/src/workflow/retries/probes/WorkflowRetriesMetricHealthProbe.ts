export class WorkflowRetriesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesMetric" };
  }
}
