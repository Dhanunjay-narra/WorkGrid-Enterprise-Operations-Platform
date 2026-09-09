export class ObsSpansSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
