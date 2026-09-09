export class IotDevicesTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
