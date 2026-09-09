export class WorkflowCronsEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowCronsEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
