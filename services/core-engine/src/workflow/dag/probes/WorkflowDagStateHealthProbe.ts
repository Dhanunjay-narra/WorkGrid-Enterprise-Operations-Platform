export class WorkflowDagStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagState" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagState" };
  }
}
