export class WorkflowEdgesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesThreshold" };
  }
}
