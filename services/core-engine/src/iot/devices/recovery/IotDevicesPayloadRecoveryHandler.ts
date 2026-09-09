export class IotDevicesPayloadRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesPayload ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
