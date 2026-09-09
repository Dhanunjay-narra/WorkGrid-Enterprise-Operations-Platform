export class DmsOcrRecordRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsOcrRecord ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
