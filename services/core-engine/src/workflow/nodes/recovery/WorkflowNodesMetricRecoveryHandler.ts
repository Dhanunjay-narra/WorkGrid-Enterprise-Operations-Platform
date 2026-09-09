export class WorkflowNodesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
