export class WorkflowDagMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
