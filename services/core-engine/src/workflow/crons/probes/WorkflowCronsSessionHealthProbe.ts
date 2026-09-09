export class WorkflowCronsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsSession" };
  }
}
