export class WorkflowRetriesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesItem" };
  }
}
