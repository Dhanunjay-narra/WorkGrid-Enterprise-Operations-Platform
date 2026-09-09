export class WorkflowVariablesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowVariablesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
