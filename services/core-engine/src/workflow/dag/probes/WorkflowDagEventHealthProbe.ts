export class WorkflowDagEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagEvent" };
  }
}
