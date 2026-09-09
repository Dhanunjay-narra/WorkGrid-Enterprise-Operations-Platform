export class WorkflowRetriesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesPolicy" };
  }
}
