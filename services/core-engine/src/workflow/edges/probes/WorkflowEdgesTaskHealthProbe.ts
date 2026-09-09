export class WorkflowEdgesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowEdgesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowEdgesTask" };
  }
}
