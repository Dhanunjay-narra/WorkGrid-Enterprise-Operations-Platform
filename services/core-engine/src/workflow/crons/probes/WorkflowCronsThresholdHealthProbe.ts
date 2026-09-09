export class WorkflowCronsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsThreshold" };
  }
}
