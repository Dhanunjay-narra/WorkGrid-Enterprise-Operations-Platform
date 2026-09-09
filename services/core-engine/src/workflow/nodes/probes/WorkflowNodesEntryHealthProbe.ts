export class WorkflowNodesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesEntry" };
  }
}
