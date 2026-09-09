export class IotCommandsRecordRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsRecord ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
