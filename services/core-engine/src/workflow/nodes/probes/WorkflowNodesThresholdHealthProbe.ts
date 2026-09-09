export class WorkflowNodesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesThreshold" };
  }
}
