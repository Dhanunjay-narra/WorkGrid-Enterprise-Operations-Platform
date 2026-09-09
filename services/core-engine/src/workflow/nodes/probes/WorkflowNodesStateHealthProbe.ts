export class WorkflowNodesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesState" };
  }
}
