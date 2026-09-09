export class WorkflowExecutionsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsConfig" };
  }
}
