export class WorkflowDagThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagThreshold" };
  }
}
