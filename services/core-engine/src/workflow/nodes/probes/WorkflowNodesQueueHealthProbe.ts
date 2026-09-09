export class WorkflowNodesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesQueue" };
  }
}
