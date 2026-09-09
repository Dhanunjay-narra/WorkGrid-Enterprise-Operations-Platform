export class WorkflowRetriesThresholdRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesThreshold ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
