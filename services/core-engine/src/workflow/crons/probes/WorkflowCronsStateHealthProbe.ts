export class WorkflowCronsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsState" };
  }
}
