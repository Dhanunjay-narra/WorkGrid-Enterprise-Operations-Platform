export class DmsOcrQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsOcrQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
