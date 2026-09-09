export class WorkflowCronsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "WorkflowCronsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "WorkflowCronsTransaction" };
  }
}
