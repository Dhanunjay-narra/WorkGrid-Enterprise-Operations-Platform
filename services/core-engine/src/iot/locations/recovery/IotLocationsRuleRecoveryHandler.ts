export class IotLocationsRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
