export class WorkflowRetriesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesTransaction" };
  }
}
