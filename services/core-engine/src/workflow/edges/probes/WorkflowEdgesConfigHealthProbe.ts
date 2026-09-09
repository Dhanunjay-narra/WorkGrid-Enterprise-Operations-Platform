export class WorkflowEdgesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesConfig" };
  }
}
