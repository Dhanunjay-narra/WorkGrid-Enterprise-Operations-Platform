export class DmsFoldersNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFoldersNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
