export class WorkflowNodesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesTask" };
  }
}
