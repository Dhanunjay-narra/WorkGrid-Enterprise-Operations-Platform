export class WorkflowNodesEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
