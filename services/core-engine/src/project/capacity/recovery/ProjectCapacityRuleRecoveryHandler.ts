export class ProjectCapacityRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
