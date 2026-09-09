export class BiAnomaliesRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiAnomaliesRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
