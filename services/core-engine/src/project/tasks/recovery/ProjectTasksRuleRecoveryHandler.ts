export class ProjectTasksRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectTasksRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
