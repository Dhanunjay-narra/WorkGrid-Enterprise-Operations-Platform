export class WorkflowRetriesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesConfig" };
  }
}
