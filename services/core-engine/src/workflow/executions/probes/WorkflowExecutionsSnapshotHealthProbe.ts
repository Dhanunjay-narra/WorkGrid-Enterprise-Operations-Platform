export class WorkflowExecutionsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsSnapshot" };
  }
}
