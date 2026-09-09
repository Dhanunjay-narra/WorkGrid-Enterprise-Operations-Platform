export class IotLocationsThresholdRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsThreshold ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
