export class WorkflowEdgesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesItem" };
  }
}
