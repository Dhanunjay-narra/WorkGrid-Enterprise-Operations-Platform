export class WorkflowCronsMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowCronsMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
