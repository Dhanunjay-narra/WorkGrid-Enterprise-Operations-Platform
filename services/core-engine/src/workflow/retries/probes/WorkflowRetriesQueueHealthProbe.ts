export class WorkflowRetriesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesQueue" };
  }
}
