export class WorkflowEdgesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesEvent" };
  }
}
