export class IotAnomaliesPayloadRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesPayload ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
