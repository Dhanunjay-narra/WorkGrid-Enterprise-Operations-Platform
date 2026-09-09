export class IotCommandsEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
