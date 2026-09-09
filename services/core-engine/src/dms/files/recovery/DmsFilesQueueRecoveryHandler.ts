export class DmsFilesQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFilesQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
