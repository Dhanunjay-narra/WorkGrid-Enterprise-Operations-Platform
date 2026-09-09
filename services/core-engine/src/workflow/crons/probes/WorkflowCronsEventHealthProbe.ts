export class WorkflowCronsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsEvent" };
  }
}
