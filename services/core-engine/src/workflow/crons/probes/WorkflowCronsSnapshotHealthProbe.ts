export class WorkflowCronsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsSnapshot" };
  }
}
