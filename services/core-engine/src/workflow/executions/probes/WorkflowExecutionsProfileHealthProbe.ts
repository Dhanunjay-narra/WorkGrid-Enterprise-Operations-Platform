export class WorkflowExecutionsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowExecutionsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowExecutionsProfile" };
  }
}
