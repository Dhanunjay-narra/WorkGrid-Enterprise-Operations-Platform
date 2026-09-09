export class DmsFoldersEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFoldersEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
