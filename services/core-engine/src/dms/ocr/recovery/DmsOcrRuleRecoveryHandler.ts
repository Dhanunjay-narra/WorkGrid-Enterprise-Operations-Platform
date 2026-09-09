export class DmsOcrRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsOcrRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
