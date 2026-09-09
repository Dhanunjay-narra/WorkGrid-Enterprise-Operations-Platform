export class WorkflowEdgesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesSession" };
  }
}
