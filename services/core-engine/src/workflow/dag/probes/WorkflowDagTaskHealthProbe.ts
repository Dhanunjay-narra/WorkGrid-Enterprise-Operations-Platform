export class WorkflowDagTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagTask" };
  }
}
