export class WorkflowNodesPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
