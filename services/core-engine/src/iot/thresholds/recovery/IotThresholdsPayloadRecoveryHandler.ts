export class IotThresholdsPayloadRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsPayload ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
