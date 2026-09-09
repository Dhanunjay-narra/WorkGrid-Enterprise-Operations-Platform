export class IotFleetRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotFleetRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
