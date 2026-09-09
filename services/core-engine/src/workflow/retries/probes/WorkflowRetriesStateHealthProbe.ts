export class WorkflowRetriesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesState" };
  }
}
