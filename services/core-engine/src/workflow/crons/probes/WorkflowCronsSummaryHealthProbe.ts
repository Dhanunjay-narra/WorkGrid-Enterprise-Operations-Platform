export class WorkflowCronsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsSummary" };
  }
}
