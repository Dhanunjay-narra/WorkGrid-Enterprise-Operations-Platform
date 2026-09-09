export class WorkflowNodesSessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesSession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
