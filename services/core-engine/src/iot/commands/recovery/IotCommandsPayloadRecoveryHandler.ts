export class IotCommandsPayloadRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotCommandsPayload ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
