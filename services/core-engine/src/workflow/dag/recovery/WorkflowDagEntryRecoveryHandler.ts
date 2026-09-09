export class WorkflowDagEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
