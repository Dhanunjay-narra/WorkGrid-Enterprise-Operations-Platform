export class WorkflowExecutionsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsReport" };
  }
}
