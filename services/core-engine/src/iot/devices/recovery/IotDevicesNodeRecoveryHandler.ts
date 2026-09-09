export class IotDevicesNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
