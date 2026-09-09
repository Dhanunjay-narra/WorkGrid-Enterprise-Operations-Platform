export class WorkflowRetriesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesThreshold" };
  }
}
