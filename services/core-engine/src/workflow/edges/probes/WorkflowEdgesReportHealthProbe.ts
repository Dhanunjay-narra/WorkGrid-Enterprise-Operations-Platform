export class WorkflowEdgesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesReport" };
  }
}
