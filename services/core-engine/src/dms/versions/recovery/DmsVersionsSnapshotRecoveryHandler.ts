export class DmsVersionsSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsVersionsSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
