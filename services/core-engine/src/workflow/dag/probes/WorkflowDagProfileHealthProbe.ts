export class WorkflowDagProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagProfile" };
  }
}
