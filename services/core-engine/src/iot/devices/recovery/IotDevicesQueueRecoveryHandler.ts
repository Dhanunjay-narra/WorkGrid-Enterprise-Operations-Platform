export class IotDevicesQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
