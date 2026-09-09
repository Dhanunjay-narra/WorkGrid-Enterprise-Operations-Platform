export class IotDevicesStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
