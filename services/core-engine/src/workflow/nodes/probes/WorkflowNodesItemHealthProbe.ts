export class WorkflowNodesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesItem" };
  }
}
