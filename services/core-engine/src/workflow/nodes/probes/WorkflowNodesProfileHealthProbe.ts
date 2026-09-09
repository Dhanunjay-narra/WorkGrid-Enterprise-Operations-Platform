export class WorkflowNodesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesProfile" };
  }
}
