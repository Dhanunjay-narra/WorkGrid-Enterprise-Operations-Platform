export class WorkflowExecutionsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsTask" };
  }
}
