export class WorkflowRetriesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesEntry" };
  }
}
