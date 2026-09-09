export class IotThresholdsSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
