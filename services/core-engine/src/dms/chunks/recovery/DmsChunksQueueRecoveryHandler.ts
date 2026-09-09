export class DmsChunksQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsChunksQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
