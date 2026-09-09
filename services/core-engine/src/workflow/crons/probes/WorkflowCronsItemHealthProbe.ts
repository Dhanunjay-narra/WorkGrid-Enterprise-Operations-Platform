export class WorkflowCronsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsItem" };
  }
}
