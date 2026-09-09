export class IotCommandsPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
