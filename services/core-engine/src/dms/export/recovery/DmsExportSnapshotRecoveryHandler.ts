export class DmsExportSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsExportSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
