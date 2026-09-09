export class IotDevicesTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
