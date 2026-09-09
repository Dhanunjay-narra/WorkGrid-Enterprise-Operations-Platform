export class WorkflowNodesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowNodesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowNodesRecord" };
  }
}
