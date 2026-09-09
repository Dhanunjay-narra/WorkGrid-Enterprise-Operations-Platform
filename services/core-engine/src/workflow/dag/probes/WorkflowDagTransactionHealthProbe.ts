export class WorkflowDagTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagTransaction" };
  }
}
