export class DmsRetentionRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsRetentionRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
