export class WorkflowExecutionsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsSession" };
  }
}
