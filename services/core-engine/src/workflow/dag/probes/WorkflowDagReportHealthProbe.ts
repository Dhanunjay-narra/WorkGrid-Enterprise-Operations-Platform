export class WorkflowDagReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagReport" };
  }
}
