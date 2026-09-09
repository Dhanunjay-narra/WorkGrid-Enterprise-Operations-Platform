export class WorkflowDagItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagItem" };
  }
}
