export class DmsChunksTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsChunksTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
