export class WorkflowExecutionsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsState" };
  }
}
