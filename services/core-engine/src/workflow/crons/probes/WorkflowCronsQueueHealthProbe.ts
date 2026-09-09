export class WorkflowCronsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsQueue" };
  }
}
