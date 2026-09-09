export class WorkflowExecutionsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsQueue" };
  }
}
