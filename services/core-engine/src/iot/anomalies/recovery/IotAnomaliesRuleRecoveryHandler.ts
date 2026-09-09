export class IotAnomaliesRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
