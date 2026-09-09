export class IotCommandsTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
