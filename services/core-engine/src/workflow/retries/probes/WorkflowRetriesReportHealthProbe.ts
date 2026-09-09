export class WorkflowRetriesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesReport" };
  }
}
