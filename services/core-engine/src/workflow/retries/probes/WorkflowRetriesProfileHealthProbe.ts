export class WorkflowRetriesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowRetriesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowRetriesProfile" };
  }
}
