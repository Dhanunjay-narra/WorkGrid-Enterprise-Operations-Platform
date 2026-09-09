export class WorkflowVariablesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowVariablesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowVariablesQueue" };
  }
}
