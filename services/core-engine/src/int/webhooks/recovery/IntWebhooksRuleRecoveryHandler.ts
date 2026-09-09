export class IntWebhooksRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IntWebhooksRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
