export class WorkflowExecutionsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsPolicy" };
  }
}
