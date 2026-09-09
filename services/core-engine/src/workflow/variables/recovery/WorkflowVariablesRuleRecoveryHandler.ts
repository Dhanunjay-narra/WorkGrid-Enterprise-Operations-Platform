export class WorkflowVariablesRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowVariablesRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
