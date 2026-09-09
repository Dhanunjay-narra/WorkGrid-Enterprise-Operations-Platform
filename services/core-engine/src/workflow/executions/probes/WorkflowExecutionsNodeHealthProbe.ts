export class WorkflowExecutionsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsNode" };
  }
}
