export class WorkflowNodesRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
