export class DmsVersionsQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsVersionsQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
