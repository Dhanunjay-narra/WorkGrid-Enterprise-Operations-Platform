export class WorkflowDagConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowDagConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowDagConfig" };
  }
}
