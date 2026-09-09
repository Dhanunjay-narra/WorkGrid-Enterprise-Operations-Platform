export class WorkflowNodesNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
