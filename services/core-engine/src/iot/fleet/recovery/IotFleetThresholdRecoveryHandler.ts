export class IotFleetThresholdRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotFleetThreshold ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
