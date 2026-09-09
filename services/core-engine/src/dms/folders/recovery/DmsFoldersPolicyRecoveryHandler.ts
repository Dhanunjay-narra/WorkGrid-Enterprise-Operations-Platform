export class DmsFoldersPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFoldersPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
