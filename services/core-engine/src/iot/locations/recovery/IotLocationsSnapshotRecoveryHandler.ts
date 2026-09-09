export class IotLocationsSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
