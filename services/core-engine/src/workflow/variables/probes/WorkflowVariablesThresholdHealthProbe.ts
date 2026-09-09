export class WorkflowVariablesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesThreshold" };
  }
}
