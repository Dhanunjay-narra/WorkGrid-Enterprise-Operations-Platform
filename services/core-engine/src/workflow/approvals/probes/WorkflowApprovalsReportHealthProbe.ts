export class WorkflowApprovalsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsReport" };
  }
}
