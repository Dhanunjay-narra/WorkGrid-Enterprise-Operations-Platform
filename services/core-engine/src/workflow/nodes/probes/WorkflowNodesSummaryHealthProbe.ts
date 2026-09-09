export class WorkflowNodesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesSummary" };
  }
}
