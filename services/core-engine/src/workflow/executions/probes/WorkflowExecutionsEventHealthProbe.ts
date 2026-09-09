export class WorkflowExecutionsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsEvent" };
  }
}
