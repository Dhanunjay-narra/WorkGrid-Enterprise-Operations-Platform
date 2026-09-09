export class WorkflowNodesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesPolicy" };
  }
}
