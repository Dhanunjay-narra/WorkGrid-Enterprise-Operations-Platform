export class WorkflowCronsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsReport" };
  }
}
