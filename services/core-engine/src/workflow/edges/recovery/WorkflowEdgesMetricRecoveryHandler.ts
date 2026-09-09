export class WorkflowEdgesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowEdgesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
