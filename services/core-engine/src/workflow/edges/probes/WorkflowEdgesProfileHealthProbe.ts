export class WorkflowEdgesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesProfile" };
  }
}
