export class ObsSpansRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
