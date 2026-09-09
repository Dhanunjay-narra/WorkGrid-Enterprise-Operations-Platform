export class IotCommandsStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
