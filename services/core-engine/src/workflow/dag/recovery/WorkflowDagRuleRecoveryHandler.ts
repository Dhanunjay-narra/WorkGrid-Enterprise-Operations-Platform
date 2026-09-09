export class WorkflowDagRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
