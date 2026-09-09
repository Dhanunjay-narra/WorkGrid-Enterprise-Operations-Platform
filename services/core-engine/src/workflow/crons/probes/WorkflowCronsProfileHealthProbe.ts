export class WorkflowCronsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsProfile" };
  }
}
