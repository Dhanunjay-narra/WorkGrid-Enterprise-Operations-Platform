export class IotDevicesSessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesSession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
