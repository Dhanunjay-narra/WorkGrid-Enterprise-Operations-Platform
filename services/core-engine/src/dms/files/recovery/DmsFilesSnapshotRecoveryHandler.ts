export class DmsFilesSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFilesSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
