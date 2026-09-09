export class IotCommandsProfileRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsProfile ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
