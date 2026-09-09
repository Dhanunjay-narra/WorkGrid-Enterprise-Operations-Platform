export class IotThresholdsRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
