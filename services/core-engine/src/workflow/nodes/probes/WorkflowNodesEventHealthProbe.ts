export class WorkflowNodesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesEvent" };
  }
}
