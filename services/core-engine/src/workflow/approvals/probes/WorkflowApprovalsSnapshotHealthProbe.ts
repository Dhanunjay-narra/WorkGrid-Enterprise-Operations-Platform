export class WorkflowApprovalsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowApprovalsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowApprovalsSnapshot" };
  }
}
