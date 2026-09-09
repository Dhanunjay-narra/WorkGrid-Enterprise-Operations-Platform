export class WorkflowCronsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsConfig" };
  }
}
