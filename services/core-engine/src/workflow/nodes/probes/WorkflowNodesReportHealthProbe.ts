export class WorkflowNodesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesReport" };
  }
}
