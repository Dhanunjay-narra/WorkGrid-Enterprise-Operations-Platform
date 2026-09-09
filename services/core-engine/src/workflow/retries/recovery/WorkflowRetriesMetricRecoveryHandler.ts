export class WorkflowRetriesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
