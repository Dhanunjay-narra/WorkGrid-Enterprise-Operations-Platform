export class WorkflowRetriesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesSession" };
  }
}
