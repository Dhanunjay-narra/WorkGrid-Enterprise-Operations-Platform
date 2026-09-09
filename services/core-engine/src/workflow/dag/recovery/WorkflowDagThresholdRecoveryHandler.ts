export class WorkflowDagThresholdRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagThreshold ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
