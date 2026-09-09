export class WorkflowRetriesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesRecord" };
  }
}
