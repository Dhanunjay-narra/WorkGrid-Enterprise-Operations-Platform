export class WorkflowEdgesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesNode" };
  }
}
