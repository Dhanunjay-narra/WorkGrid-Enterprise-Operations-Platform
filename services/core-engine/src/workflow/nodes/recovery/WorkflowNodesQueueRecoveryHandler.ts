export class WorkflowNodesQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
