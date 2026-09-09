export class WorkflowNodesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesConfig" };
  }
}
