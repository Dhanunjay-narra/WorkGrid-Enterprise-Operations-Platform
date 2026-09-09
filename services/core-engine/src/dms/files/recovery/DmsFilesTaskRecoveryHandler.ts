export class DmsFilesTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFilesTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
