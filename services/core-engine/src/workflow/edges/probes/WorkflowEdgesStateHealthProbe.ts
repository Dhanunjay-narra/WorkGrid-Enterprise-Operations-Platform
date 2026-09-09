export class WorkflowEdgesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesState" };
  }
}
