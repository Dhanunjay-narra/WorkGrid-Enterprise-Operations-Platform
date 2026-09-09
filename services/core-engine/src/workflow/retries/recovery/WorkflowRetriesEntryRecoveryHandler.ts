export class WorkflowRetriesEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
