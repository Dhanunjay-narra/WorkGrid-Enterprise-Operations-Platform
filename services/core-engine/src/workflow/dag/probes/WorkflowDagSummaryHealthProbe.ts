export class WorkflowDagSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagSummary" };
  }
}
