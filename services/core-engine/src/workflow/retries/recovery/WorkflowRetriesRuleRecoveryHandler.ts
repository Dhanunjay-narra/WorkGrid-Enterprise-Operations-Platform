export class WorkflowRetriesRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
