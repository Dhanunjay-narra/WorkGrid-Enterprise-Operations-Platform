export class WorkflowRetriesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesSummary" };
  }
}
