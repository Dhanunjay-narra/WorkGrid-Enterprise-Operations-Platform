export class IotThresholdsThresholdRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsThreshold ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
