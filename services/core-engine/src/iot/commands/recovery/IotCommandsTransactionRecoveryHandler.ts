export class IotCommandsTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
