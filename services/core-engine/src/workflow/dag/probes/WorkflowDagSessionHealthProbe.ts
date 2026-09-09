export class WorkflowDagSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagSession" };
  }
}
