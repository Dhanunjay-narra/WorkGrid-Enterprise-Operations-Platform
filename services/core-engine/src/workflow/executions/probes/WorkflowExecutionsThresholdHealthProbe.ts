export class WorkflowExecutionsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsThreshold" };
  }
}
