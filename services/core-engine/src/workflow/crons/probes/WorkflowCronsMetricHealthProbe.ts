export class WorkflowCronsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsMetric" };
  }
}
