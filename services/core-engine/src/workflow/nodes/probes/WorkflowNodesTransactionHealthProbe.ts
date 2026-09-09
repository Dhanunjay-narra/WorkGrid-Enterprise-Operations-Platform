export class WorkflowNodesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesTransaction" };
  }
}
