export class WorkflowDagQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagQueue" };
  }
}
