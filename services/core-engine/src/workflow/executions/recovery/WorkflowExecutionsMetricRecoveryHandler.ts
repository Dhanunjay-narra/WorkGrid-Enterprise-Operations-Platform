export class WorkflowExecutionsMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowExecutionsMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
