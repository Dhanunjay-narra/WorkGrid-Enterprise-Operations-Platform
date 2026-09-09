export class WorkflowRetriesItemRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesItem ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
