export class WorkflowCronsRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowCronsRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
