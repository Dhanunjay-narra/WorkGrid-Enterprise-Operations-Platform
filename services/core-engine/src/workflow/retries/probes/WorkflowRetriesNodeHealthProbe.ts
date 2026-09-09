export class WorkflowRetriesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesNode" };
  }
}
