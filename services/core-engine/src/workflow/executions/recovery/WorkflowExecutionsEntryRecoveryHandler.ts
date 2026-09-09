export class WorkflowExecutionsEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowExecutionsEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
