export class WorkflowNodesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesNode" };
  }
}
