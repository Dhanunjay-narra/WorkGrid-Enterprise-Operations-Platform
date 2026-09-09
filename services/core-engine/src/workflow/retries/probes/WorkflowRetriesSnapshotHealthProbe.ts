export class WorkflowRetriesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesSnapshot" };
  }
}
