export class WorkflowEdgesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesQueue" };
  }
}
