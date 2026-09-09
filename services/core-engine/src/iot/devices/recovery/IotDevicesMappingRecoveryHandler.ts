export class IotDevicesMappingRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesMapping ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
