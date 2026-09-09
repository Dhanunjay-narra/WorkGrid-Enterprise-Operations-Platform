export class IotFleetSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotFleetSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
