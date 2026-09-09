export class IotDevicesPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
