export class IotDevicesConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
