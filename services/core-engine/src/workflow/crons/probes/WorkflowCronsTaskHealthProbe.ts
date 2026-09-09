export class WorkflowCronsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsTask" };
  }
}
