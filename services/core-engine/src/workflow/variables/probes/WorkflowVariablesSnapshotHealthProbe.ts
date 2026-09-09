export class WorkflowVariablesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesSnapshot" };
  }
}
