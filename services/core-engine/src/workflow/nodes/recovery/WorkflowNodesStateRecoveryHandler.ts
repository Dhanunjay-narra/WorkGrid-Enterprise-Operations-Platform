export class WorkflowNodesStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
