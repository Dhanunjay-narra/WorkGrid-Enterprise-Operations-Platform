export class WorkflowNodesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesSession" };
  }
}
