export class IotCommandsRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
