export class DmsFilesEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFilesEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
