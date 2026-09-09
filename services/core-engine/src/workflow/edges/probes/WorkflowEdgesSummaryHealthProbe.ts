export class WorkflowEdgesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesSummary" };
  }
}
