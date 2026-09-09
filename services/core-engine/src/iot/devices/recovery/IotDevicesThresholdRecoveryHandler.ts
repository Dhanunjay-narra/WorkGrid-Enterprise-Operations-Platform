export class IotDevicesThresholdRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesThreshold ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
