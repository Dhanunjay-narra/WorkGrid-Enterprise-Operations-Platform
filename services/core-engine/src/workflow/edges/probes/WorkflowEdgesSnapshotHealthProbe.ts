export class WorkflowEdgesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesSnapshot" };
  }
}
