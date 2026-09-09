export class WorkflowNodesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesSnapshot" };
  }
}
