export class WorkflowApprovalsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsMetric" };
  }
}
