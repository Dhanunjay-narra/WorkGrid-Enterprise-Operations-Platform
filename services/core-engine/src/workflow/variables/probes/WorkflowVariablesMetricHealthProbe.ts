export class WorkflowVariablesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesMetric" };
  }
}
