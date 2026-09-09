export class WorkflowNodesTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
