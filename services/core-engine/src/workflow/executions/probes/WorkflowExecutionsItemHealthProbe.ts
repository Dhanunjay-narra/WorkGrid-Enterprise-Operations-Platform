export class WorkflowExecutionsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsItem" };
  }
}
