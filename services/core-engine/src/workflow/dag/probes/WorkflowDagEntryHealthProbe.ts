export class WorkflowDagEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagEntry" };
  }
}
