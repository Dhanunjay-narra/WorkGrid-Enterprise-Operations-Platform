export class WorkflowDagSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagSnapshot" };
  }
}
